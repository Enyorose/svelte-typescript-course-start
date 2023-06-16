<script lang="ts">
	import {writable} from 'svelte/store';
	import Test from '$lib/Test.svelte';
	import '$db/start';
	import {search} from '$lib/state'
	import { setContext } from 'svelte';
	import type { CurrentPositionContext } from '$lib/types.js';
	export let data;

	setContext<CurrentPositionContext>('current_position', {
		value:10,
		text: writable<string>('Hello')
	})
	const is_nav_open = writable<boolean>();
	// const player_status = writable<'PLAY' | 'STOP'>();

	// $player_status = 'PAUSE'

	let name: string = 'Jessica'
	$: ({ latest_episode } = data);
	
	function on_play(event: CustomEvent<{player_status: 'PLAY'| 'STOP'}>){
		search.toggle_status()
	}


</script>

<h2>Latest Episode</h2>
<h3>{latest_episode.title}</h3>

<Test {name} on:play={on_play} {is_nav_open} />

{#if $is_nav_open}
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
{/if}

{$search.text}
{$search.status}

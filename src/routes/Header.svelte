<script lang="ts">
	import {click_outside} from '$lib/click_outside';
	function click(e: CustomEvent){
		console.log('e', e)
	}

	let header_element: HTMLElement | undefined
	$: console.log(header_element)
</script>

<header use:click_outside on:click-outside={click} bind:this={header_element}>
	<h1><a href="/">Syntax Podcast</a></h1>
</header>

<style>
	header {
		height: var(--header_height);
		display: flex;
		align-items: center;
		padding: 0 20px;
		background: var(--black);
		color: var(--white);
	}

	h1 {
		font-size: 16px;
		margin: 0;
	}
	a {
		color: var(--white);
		text-decoration: none;
	}
</style>

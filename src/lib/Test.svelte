<script lang="ts">
    import { createEventDispatcher, getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import type { CurrentPositionContext } from "./types";
    const dispatch = createEventDispatcher<{ play: {player_status: 'PLAY'| 'STOP'}}>();
    //required prop
	export let name: string;
    // optional props
    // must have default value
    export let expanded: boolean = false;
    export let list: string[] = [];
    export let is_nav_open: Writable<boolean>;
    
    const {value, text} = getContext<CurrentPositionContext>('current_position');
    
    //valid event solution #1
    // function on_click(event: Event){
    //     //This is a version of casting
    //     const target = event.currentTarget as HTMLButtonElement;
    //     console.log(target.innerText);
    // }
    // *recommended* valid event solution #2
    function on_click(event: Event & { currentTarget: EventTarget & HTMLButtonElement}){
        console.log(event.currentTarget.innerText);
    }
    function on_input(event: Event & { currentTarget: EventTarget & HTMLInputElement}){
        console.log(event.currentTarget.value);
    }

</script>

<h1>{name}</h1>
<button on:click={()=> dispatch('play', {player_status: 'PLAY'})}>Click me</button>
<input type="text" on:input={on_input}>
{#if expanded}
    <p>Expanded</p>
{/if}
 {#each list as item}
    <p>{item}</p>
{/each}

<h4>{value}{$text}</h4>

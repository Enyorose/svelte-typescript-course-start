import type { Action } from 'svelte/action'

interface Attributes {
    'on:click-outside'?: (event: CustomEvent) => void
}

export const click_outside: Action<HTMLElement, any, Attributes> = function (node) {
    //initialize
    const handle_click = function (event: MouseEvent) {
        if (event.target instanceof Element) {
            if (!node.contains(event.target)) {
                node.dispatchEvent(
                    new CustomEvent('click-outside', {detail: 'Detects a click outside'})
                )
            }
        }
    }

    document.addEventListener('click', handle_click, true)
    return {
        destroy() {
            //whenever action is destroyed
            document.removeEventListener('click', handle_click, true)
        }
    }
}
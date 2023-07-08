import { writable, type Writable } from "svelte/store";

export const pageOrder: Writable<{[href:string]:number}> = writable({
    '/': 0,
    '/projects': 1,
});
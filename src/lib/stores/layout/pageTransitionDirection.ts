import { writable, type Writable } from 'svelte/store';

export const direction: Writable<'left' | 'right'> = writable();

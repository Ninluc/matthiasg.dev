import { writable, type Writable } from 'svelte/store';

export const headerHeight: Writable<number> = writable(0);

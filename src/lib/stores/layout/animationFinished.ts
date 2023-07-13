import { writable, type Writable } from 'svelte/store';

export const animationFinished: Writable<boolean> = writable(true);

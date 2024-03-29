import { dev } from '$app/environment';
import * as ackeeTracker from 'ackee-tracker';
import { writable, type Writable } from 'svelte/store';

export const tracker: Writable<null | ackeeTracker.AckeeInstance> = writable(null);

export async function setAckeeTracker() {
	tracker.set(
		ackeeTracker.create('https://analytics.matthiasg.dev', {
			detailed: true,
			ignoreLocalhost: !dev,
			ignoreOwnVisits: !dev
		})
	);
}

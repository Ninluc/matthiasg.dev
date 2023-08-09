import * as ackeeTracker from 'ackee-tracker';
import { writable, type Writable } from 'svelte/store';

export const tracker: Writable<null | ackeeTracker.AckeeInstance> = writable(null);

export function setAckeeTracker() {
	tracker.set(
		ackeeTracker.create('https://analytics.matthiasg.dev', {
			detailed: true,
			ignoreLocalhost: true,
			ignoreOwnVisits: true
		})
	);
}

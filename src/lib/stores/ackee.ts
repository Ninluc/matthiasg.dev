import * as ackeeTracker from 'ackee-tracker';

export const tracker = ackeeTracker.create('https://analytics.matthiasg.dev', {
	detailed: true,
	ignoreLocalhost: true,
	ignoreOwnVisits: true
});

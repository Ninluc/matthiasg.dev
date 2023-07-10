import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	retries: process.env.CI ? 2 : 0, // set to 2 when running on CI,
	webServer: {
		command: 'npm run build && npm run preview',
		timeout: 120 * 1000, // time to launch server, 6o by default
		port: 4173
	},
	timeout: 30000,
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;

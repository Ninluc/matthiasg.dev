import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	retries: process.env.CI ? 2 : 0, // set to 2 when running on CI,
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;

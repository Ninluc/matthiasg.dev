import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite'
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), imagetools()],

	ssr: {
		noExternal: ['three', 'troika-three-text']
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});

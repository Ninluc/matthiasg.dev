<script lang="ts">
	import { text } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	export let imgPath: string = '';
	export let alt: string = '';
	export let href: string = '/';

	async function getImage(path: string): Promise<string> {
		const res = await fetch(path);
		const data = await res.text();

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	}
</script>

<a {href} target="_blank" title={alt}>
	{#await getImage(imgPath)}
		{alt}
	{:then img}
		{@html img}
	{/await}
</a>

<style lang="scss">
	a {
		aspect-ratio: 1 / 1;
		width: min(42px, 10vw);
		height: min(42px, 10vw);

		/* For placeholder text */
		font: $linkmain;
		color: $color-primary;

		// position: relative;

		:global(svg) {
			// position: absolute;
			// top: 0px;
			// left: 0px;
			width: 100%;
			height: 100%;

			fill: $color-primary-500;

			transition: fill $transition-time-small $transition-timingfunction;
		}

		&:hover {
			:global(svg) {
				fill: $color-primary-200;
			}
		}
	}
</style>

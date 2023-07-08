<script lang="ts">
	import { onMount } from 'svelte';

	export let imgPath: string = '';
	export let alt: string = '';
	export let href: string = '/';

	let Thing: any;

	onMount(async () => {
		Thing = (await import(/* @vite-ignore */ imgPath)).default;
	});
</script>

<a {href} target="_blank" title={alt}>
	<!-- <img src={imgPath} {alt} /> -->
	<svelte:component this={Thing} />
</a>

<style lang="scss">
	a {
		aspect-ratio: 1 / 1;
		width: min(42px, 10vw);
		height: min(42px, 10vw);

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

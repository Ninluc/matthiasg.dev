<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	export let intersectionCallback: (target: Element) => void = () => {};

	// Function to handle intersection changes
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		const entry = entries.find((entry) => entry.isIntersecting);

		if (entry) {
			intersectionCallback(entry.target);
		}
	};

	let observer: IntersectionObserver;
	let component: HTMLElement;
	onMount(() => {
		let rootMargin = '-3%';

		// Create an Intersection Observer when the component is mounted
		observer = new IntersectionObserver(handleIntersection, {
			root: null, // viewport
			rootMargin: `${rootMargin} ${rootMargin} ${rootMargin} ${rootMargin}`, // margin around the root (viewport)
			threshold: 0.2 // % of the element to be in the viewport
		});

		// Observe the component
		if (component) {
			observer.observe(component);
		}
	});

	// No js support
	if (!browser) {
		intersectionCallback(component);
	}

	// Cleanup the observer when the component is unmounted
	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<section class="content-section {$$restProps.class || ''}" bind:this={component}>
	<slot />
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;

		& > :global(*) {
			max-width: min(calc(100% - $gap-big), 28.5cm);
		}
	}
</style>

<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let intersectionCallback: (target: Element) => void;

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
		// Create an Intersection Observer when the component is mounted
		observer = new IntersectionObserver(handleIntersection, {
			root: null, // viewport
			rootMargin: '-1.5% -1.5% -1.5% -1.5%', // margin around the root (viewport)
			threshold: 0.5 // % of the element to be in the viewport
		});

		// Observe the component
		if (component) {
			observer.observe(component);
		}
	});

	// Cleanup the observer when the component is unmounted
	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<section class="content-section" bind:this={component}>
	<slot />
</section>

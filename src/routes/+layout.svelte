<script lang="ts">
	import Header from '$components/layout/header/Header.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';
	import PageTransition from '$components/layout/pageTransition/PageTransition.svelte';

	// import { headerHeight } from '$lib/stores/layout/headerHeight';

	import '../app.scss';

	import { pageOrder } from '$stores/layout/pageOrder';
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import { beforeUpdate } from 'svelte';

	export let data;

	/** Old pathname, changed before changing page */
	let oldPathname: string;
	beforeUpdate(() => {
		oldPathname = data.pathname;
	});

	const devStyle = dev ? 'color:#b5b;' : '';

	// Transition direction
	let direction: 'left' | 'right';
	$: direction = $pageOrder[data.pathname] > $pageOrder[oldPathname] ? 'left' : 'right';
</script>

<Header />

<!-- <main style="{devStyle} --headerHeight: {$headerHeight}px;"> -->
<main style={devStyle}>
	{#key data.pathname}
		<PageTransition {direction}>
			<slot />
		</PageTransition>
	{/key}
</main>

<Footer />

<style lang="scss">
	main {
		// padding-top: var(--headerHeight);
		padding-top: clamp(51px, 2vh, 50vh);

		overflow-x: hidden;

		/* Remove layout jumps beatween pages transitions */
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		& > :global(*) {
			grid-row: 1;
			grid-column: 1;
		}
	}
</style>

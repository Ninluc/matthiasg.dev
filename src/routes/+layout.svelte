<script lang="ts">
	import { pages } from '$stores/layout/pages';
	import { page } from '$app/stores';
	import Header from '$components/layout/header/Header.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';
	import PageTransition from '$components/layout/pageTransition/PageTransition.svelte';

	// import { headerHeight } from '$lib/stores/layout/headerHeight';

	import '../app.scss';

	import { pageOrder } from '$stores/layout/pageOrder';
	import { direction } from '$stores/layout/pageTransitionDirection';
	import { dev } from '$app/environment';
	import { beforeNavigate } from '$app/navigation';

	export let data;

	/** Old pathname, changed before changing page */
	let oldPathname: string;
	beforeNavigate(() => {
		oldPathname = data.pathname;
	});

	const devStyle = dev ? 'color:#b5b;' : '';

	// Transition direction
	$: $direction =
		($pageOrder[data?.pathname] ?? 0) > ($pageOrder[oldPathname] ?? 0) ? 'left' : 'right';

	let currentTitle: string | undefined;
	$: currentTitle = $pages.find((p) => p.path === data.pathname)?.title;
</script>

<svelte:head>
	<title>{currentTitle ? `${currentTitle} | matthiasg.dev` : 'matthiasg.dev'}</title>
</svelte:head>

<Header />

<!-- <main style="{devStyle} --headerHeight: {$headerHeight}px;"> -->
<main style={devStyle}>
	{#key data.pathname}
		<!-- From theme.scss -->
		<PageTransition duration={500}>
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

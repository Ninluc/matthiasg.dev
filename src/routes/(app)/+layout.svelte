<script lang="ts">
	import * as ackeeTracker from 'ackee-tracker';

	import Header from '$components/layout/header/Header.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';
	import PageTransition from '$components/layout/pageTransition/PageTransition.svelte';
	import LoadingScreen from '$components/layout/loading/LoadingScreen.svelte';

	import { pages } from '$stores/layout/pages';
	import { direction } from '$stores/layout/pageTransitionDirection';
	import { loadingFinished } from '$stores/layout/loadingFinished';

	import { browser, dev } from '$app/environment';
	import { beforeNavigate } from '$app/navigation';

	import '../../app.scss';
	import { beforeUpdate, onMount } from 'svelte';
	import { pageToIsBefore } from '$lib/scripts/layout/pageToIsBefore';

	export let data;

	let oldPathname: string;
	/** Old pathname, changed before changing page */
	beforeNavigate(() => {
		oldPathname = data.pathname;
	});

	const devStyle = dev ? 'color:#b5b;' : '';

	// Transition direction
	$: $direction = pageToIsBefore(data?.pathname, oldPathname ?? '') ? 'right' : 'left';

	let currentTitle: string | undefined;
	$: currentTitle = $pages.find((p) => p.path === data.pathname)?.title;

	// let activateLoadingScreen: boolean = !dev;
	let activateLoadingScreen: boolean = true;
	beforeUpdate(() => {
		// Do we need loading animation ?
		// activateLoadingScreen = oldPathname === undefined && data.pathname == '/' && !dev;
		activateLoadingScreen = oldPathname === undefined && data.pathname == '/';

		if (!activateLoadingScreen || !browser) {
			loadingFinished.set(true);
		}
	});

	if (browser) {
		const tracker = ackeeTracker.create('https://analytics.matthiasg.dev', {
			detailed: true,
			ignoreLocalhost: false
		});
		tracker.record(import.meta.env.ACKEE_DOMAIN);
	}

	let htmlTag: HTMLElement;

	onMount(() => {
		htmlTag = document.documentElement;
	});

	$: {
		if (htmlTag) {
			if (browser && !$loadingFinished && activateLoadingScreen) {
				setTimeout(() => {
					// scroll to top
					document.body.scrollIntoView();
				});

				htmlTag.classList.add('disable-scroll');
			} else {
				htmlTag.classList.remove('disable-scroll');
			}
		}
	}
</script>

<svelte:head>
	<title>{currentTitle ? `${currentTitle} | matthiasg.dev` : 'matthiasg.dev'}</title>
</svelte:head>

<svelte:document class:disable-scroll={!$loadingFinished && activateLoadingScreen} />

<Header />

{#if !$loadingFinished && activateLoadingScreen}
	<LoadingScreen />
{/if}

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

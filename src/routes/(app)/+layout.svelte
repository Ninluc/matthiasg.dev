<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$components/layout/header/Header.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';
	import PageTransition from '$components/layout/pageTransition/PageTransition.svelte';
	import LoadingScreen from '$components/layout/loading/LoadingScreen.svelte';
	import { direction } from '$stores/layout/pageTransitionDirection';
	import { loadingFinished } from '$stores/layout/loadingFinished';

	import { browser, dev } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	import '../../app.scss';
	import { beforeUpdate, onMount } from 'svelte';
	import { pageToIsBefore } from '$lib/scripts/layout/pageToIsBefore';
	import { setAckeeTracker, tracker } from '$stores/ackee';

	export let data;

	let oldPathname: string;
	/** Old pathname, changed before changing page */
	beforeNavigate(() => {
		oldPathname = data.pathname;
	});

	const devStyle = dev ? 'color:#b5b;' : '';

	// Transition direction
	$: $direction = pageToIsBefore(data?.pathname, oldPathname ?? '') ? 'right' : 'left';

	// SEO
	// - Title
	let currentTitle: string | undefined;
	$: currentTitle = $page.data.seo?.title;
	$: currentTitle = currentTitle ? `${currentTitle} | matthiasg.dev` : 'matthiasg.dev';
	// - Description
	let currentDescription: string | undefined;
	$: currentDescription = $page.data.seo?.description;
	$: currentDescription = currentDescription ?? 'Portfolio de Matthias Guillitte, développeur';
	// - Image
	let currentImage: string | undefined;
	$: currentImage = $page.data.seo?.image;
	$: currentImage = currentImage ?? '/android-chrome-384x384.png';
	// - Page type
	let currentType: 'article' | 'website' | undefined;
	$: currentType = $page.data.seo?.type;
	$: currentType = currentType ?? 'website';
	// - Twitter card
	//    - Card type
	let currentTwitterCardType: 'summary' | 'summary_large_image' | undefined;
	$: currentTwitterCardType = $page.data.seo?.twitterCardType;
	$: currentTwitterCardType = currentTwitterCardType ?? 'summary';

	let activateLoadingScreen: boolean = !dev;
	// let activateLoadingScreen: boolean = true;
	beforeUpdate(() => {
		// Do we need loading animation ?
		activateLoadingScreen = oldPathname === undefined && data.pathname == '/' && !dev;
		// activateLoadingScreen = oldPathname === undefined && data.pathname == '/';

		if (!activateLoadingScreen || !browser) {
			loadingFinished.set(true);
		}
	});

	if (browser) {
		if (!$tracker) {
			setAckeeTracker();
		}
		$tracker?.record(import.meta.env.VITE_ACKEE_DOMAIN);
	}

	let htmlTag: HTMLElement;

	afterNavigate(() => {
		// onMount(() => {
		htmlTag = document.documentElement;

		// Fix scrolling to fragment on page full reload
		// Still didn't fix it when coming from another page
		console.log('gonna scroll');
		const hash = $page.url.hash;
		let scrollTo = hash && document.getElementById(hash.slice(1, hash.length));
		if (scrollTo) {
			setTimeout(() => {
				scrollTo = hash && document.getElementById(hash.slice(1, hash.length));
				scrollTo.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
					inline: 'nearest'
				});
			}, 500);
		}
		// });
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
	<title>{currentTitle}</title>
	<meta property="og:title" content={currentTitle} />
	<meta name="twitter:title" content={currentTitle} />
	<meta name="description" content={currentDescription} />
	<meta property="og:description" content={currentDescription} />
	<meta name="twitter:description" content={currentDescription} />
	{#if currentImage}
		<meta property="og:image" content={currentImage} />
		<meta name="twitter:image" content={currentImage} />
	{/if}
	{#if currentType}
		<meta property="og:type" content={currentType} />
	{/if}
	<meta property="og:locale" content="fr_BE" />
	<meta name="twitter:card" content={currentTwitterCardType} />
	<meta name="twitter:site" content={$page.url.toString()} />
	<meta name="twitter:creator" content="datboi_master" />
</svelte:head>

<svelte:document class:disable-scroll={!$loadingFinished && activateLoadingScreen} />

<Header oldPath={oldPathname} currentPath={data.pathname} />

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
		grid-template-columns: 100vw;

		& > :global(*) {
			grid-row: 1;
			grid-column: 1;
		}
	}
</style>

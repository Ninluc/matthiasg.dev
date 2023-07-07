<script lang="ts">
	import Header from '$components/layout/header/Header.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';

	import { headerHeight } from '$lib/stores/layout/headerHeight';

	import '../app.scss';

	import { dev } from '$app/environment';

	const devStyle = dev ? 'color:#b5b;' : '';
</script>

<Header />

<main style="{devStyle} --headerHeight: {$headerHeight}px;">
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		padding-top: var(--headerHeight);
	}
</style>

<script lang="ts">
	import { headerHeight } from '$lib/stores/layout/headerHeight';
	import '../app.scss';
	import Header from '$components/layout/Header.svelte';
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

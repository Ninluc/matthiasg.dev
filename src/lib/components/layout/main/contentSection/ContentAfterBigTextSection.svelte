<script>
	import ContentSectionClassAppearOnce from './base/ContentSectionClassAppearOnce.svelte';
</script>

<ContentSectionClassAppearOnce>
	<slot />
</ContentSectionClassAppearOnce>

<style lang="scss">
	:global(main section.content-section) {
		$padding-top: $gap-huge;
		padding: $padding-top 0 ($padding-top * 2) 0;

		// REMOVEME
		font-size: x-large;
	}
</style>

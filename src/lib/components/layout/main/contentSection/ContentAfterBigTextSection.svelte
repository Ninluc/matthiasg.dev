<script lang="ts">
	import ContentSectionClassAppearOnce from './base/ContentSectionClassAppearOnce.svelte';

	export let intersectionCallback: (target: Element) => void = () => {};
</script>

<ContentSectionClassAppearOnce
	intersectionCallback={(el) => {
		intersectionCallback(el);
	}}
>
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

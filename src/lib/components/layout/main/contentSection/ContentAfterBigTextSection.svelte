<script lang="ts">
	import ContentSectionClassAppearOnce from './base/ContentSectionClassAppearOnce.svelte';

	export let intersectionCallback: (target: Element) => void = () => {};

	export let id: string = '';
</script>

<ContentSectionClassAppearOnce
	{id}
	intersectionCallback={(el) => {
		intersectionCallback(el);
	}}
>
	<slot />
</ContentSectionClassAppearOnce>

<script lang="ts">
	import ContentSectionFireOnce from './ContentSectionFireOnce.svelte';

	export let intersectionCallback: (target: Element) => void = () => {};
</script>

<ContentSectionFireOnce
	intersectionCallback={(el) => {
		el.classList.add('content-section__appear');
		intersectionCallback(el);
	}}
>
	<slot />
</ContentSectionFireOnce>

<script lang="ts">
	import ContentSectionFireOnce from './ContentSectionFireOnce.svelte';

	export let intersectionCallback: (target: Element) => void = () => {};
</script>

<ContentSectionFireOnce
	intersectionCallback={(el) => {
		console.log('Intersection callback fired!');
		el.classList.add('content-section__appear');
		intersectionCallback(el);
	}}
>
	<slot />
</ContentSectionFireOnce>

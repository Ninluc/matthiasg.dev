<script lang="ts">
	import { browser } from '$app/environment';
	import ContentSectionFireOnce from './ContentSectionFireOnce.svelte';

	export let intersectionCallback: (target: Element) => void = () => {};

	export let id: string = '';
</script>

<ContentSectionFireOnce
	{id}
	class="{$$restProps.class || ''} {!browser && 'content-section__appear'}"
	intersectionCallback={(el) => {
		if (browser) {
			el.classList.add('content-section__appear');
		}
		intersectionCallback(el);
	}}
>
	<slot />
</ContentSectionFireOnce>

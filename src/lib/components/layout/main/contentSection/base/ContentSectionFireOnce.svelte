<script lang="ts">
	import ContentSection from './ContentSection.svelte';

	export let intersectionCallback: (target: Element) => void = () => {};

	let fired: boolean = false;

	export let id: string = '';
</script>

<ContentSection
	{id}
	class={$$restProps.class || ''}
	intersectionCallback={(el) => {
		if (!fired) {
			intersectionCallback(el);
			fired = true;
		}
	}}
>
	<slot />
</ContentSection>

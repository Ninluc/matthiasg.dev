<script lang="ts">
	import ContentSection from './ContentSection.svelte';

	export let intersectionCallback: (target: Element) => void = () => {};

	let fired: boolean = false;
</script>

<ContentSection
	intersectionCallback={(el) => {
		if (!fired) {
			intersectionCallback(el);
			fired = true;
		}
	}}
>
	<slot />
</ContentSection>

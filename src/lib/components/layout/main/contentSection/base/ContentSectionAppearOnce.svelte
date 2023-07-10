<script lang="ts">
	import ContentSectionFireOnce from './ContentSectionFireOnce.svelte';

	let isInView: Boolean = false;
</script>

<ContentSectionFireOnce
	intersectionCallback={(el) => {
		isInView = true;
	}}
>
	{#if isInView}
		<slot />
	{/if}
</ContentSectionFireOnce>

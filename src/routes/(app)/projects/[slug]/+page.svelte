<script lang="ts">
	import TextSection from '$components/layout/main/contentSection/TextSection.svelte';

	export let data;
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<TextSection>
	<article>
		<svelte:component this={data.content} />
	</article>
</TextSection>

<style lang="scss">
	article {
		width: 100%;
	}
</style>


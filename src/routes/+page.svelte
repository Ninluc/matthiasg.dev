<script>
	import BigTextSection from '$components/layout/main/contentSection/BigTextSection.svelte';
</script>

<BigTextSection>Test</BigTextSection>
<BigTextSection>Test</BigTextSection>
<BigTextSection>Test</BigTextSection>
<BigTextSection>Test</BigTextSection>
<BigTextSection>Test</BigTextSection>
<BigTextSection>Test</BigTextSection>
<BigTextSection>Test</BigTextSection>
<BigTextSection>Test</BigTextSection>
<BigTextSection>Test</BigTextSection>

<style lang="scss">
	:global(section.content-section) {
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;

		& :global(> p) {
			font-size: 5rem;
			font-weight: 700;
			color: #fff;
			text-align: center;
		}
	}
</style>

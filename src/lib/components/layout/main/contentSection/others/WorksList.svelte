<script lang="ts">
	import WorkArticle from './WorkArticle.svelte';
	import type { WorksApi } from '$lib/types/worksApi';
	import ContentAfterBigTextSection from '../ContentAfterBigTextSection.svelte';
	import VisuallyHiddenTitle from '$components/theme/misc/VisuallyHiddenTitle.svelte';

	export let works: WorksApi[] = [];
	export const headingLevel: number = 3;
</script>

<ContentAfterBigTextSection id="some-projects">
	<!-- Visually hidden title -->
	<VisuallyHiddenTitle headingLevel={2}>Quelques projets que j'ai fait</VisuallyHiddenTitle>

	<section class="works-container">
		{#each works as work}
			<WorkArticle {work} {headingLevel} />
		{/each}
	</section>
</ContentAfterBigTextSection>

<style lang="scss">
	section.works-container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: $gap-big;

		@for $i from 1 through 3 {
			& > :global(:nth-child(#{$i})) {
				opacity: 0;
				transition: opacity $transition-time-long $transition-timingfunction;
				transition-delay: $transition-time-medium * ($i - 1);
			}
		}
	}
</style>

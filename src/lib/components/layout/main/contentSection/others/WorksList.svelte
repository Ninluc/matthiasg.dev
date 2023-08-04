<script lang="ts">
	import WorkArticle from './WorkArticle.svelte';
	import type { WorksApi } from '$lib/types/worksApi';
	import ContentAfterBigTextSection from '../ContentAfterBigTextSection.svelte';

	export let works: WorksApi[] = [];
	export const headingLevel: number = 3;
</script>

<ContentAfterBigTextSection>
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

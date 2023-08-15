<script lang="ts">
	import TitleHeader from '$components/layout/main/contentSection/TitleHeader.svelte';
	import ContentSection from '$components/layout/main/contentSection/base/ContentSection.svelte';
	import WorksList from '$components/layout/main/contentSection/others/WorksList.svelte';
	import CategoryFilterChip from '$components/theme/CategoryFilterChip.svelte';

	export let data;
</script>

<TitleHeader>
	<h2>Mes projets</h2>

	<div class="filters-container">
		<div class="filters">
			<CategoryFilterChip category="tous" />
			<CategoryFilterChip category="personnel" />
			<CategoryFilterChip category="scolaire" />
			<CategoryFilterChip category="profesionnel" />
		</div>
	</div>
</TitleHeader>

{#key data.works}
	<WorksList headingLevel={3} works={data.works} />
{/key}

<style lang="scss">
	h2 {
		width: 100%;

		margin: 0;

		font: $title;
		line-height: $lineheight-title;
		text-align: left;

		color: $font-color-on-surface;

		@media only screen and (max-width: $screen-small) {
			font-size: clamp(30px, $size-title, 10vw);
		}
	}

	.filters-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		.filters {
			padding: $theme-borderradius;

			background-color: $color-completelyblack;

			border-radius: $theme-borderradius;

			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: $gap-medium;

			overflow-x: auto;

			@media only screen and (max-width: $screen-xsmall) {
				padding: $gap-medium;
			}
		}
	}
</style>

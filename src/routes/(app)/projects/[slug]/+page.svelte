<script lang="ts">
	import TextSection from '$components/layout/main/contentSection/TextSection.svelte';
	import TitleHeader from '$components/layout/main/contentSection/TitleHeader.svelte';
	import Button from '$components/theme/Button.svelte';
	import CategoryChip from '$components/theme/CategoryChip.svelte';

	export let data;
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<TitleHeader>
	<h2>{data.title}</h2>
	<div class="work-info-container">
		<div class="work-info">
			<CategoryChip category={data.category} />
			<p class="write-date">{data.date}</p>
			{#if data.projectDate}
				<p class="project-date">Date du projet : {data.projectDate}</p>
			{/if}
			{#if data.projectLink}
				<Button
					href={data.projectLink}
					colorType="cta"
					target="blank"
					rel="noopener noreferrer external">Accéder au site</Button
				>
			{/if}
		</div>
	</div>
</TitleHeader>

<TextSection>
	<article>
		<svelte:component this={data.content} />
	</article>
</TextSection>

<style lang="scss">
	@use 'sass:math';

	// Header
	h2 {
		width: 100%;

		margin: 0;

		font: $title;
		line-height: $lineheight-title;
		text-align: left;

		color: $font-color-on-surface;
	}

	.work-info-container {
		width: 100%;

		display: flex;
		justify-content: flex-start;

		div.work-info {
			padding: $gap-medium;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: $gap-medium;

			background: $color-completelyblack;
			// background: $color-surface;

			border-radius: $theme-borderradius;

			p {
				margin: 0;
			}

			p.write-date,
			p.project-date {
				font: $main;
				color: $font-color-on-surface;
			}
		}
	}

	article {
		width: 100%;

		:global(h3),
		:global(h4),
		:global(h5),
		:global(h6) {
			font: $title;
			line-height: $lineheight-title;
			// font-family: $family-main;
		}

		$removeFactor: $size-title * 0.1;
		@for $i from 3 through 6 {
			:global(h#{$i}) {
				$y: $i - 3;
				$z: $i - 2;
				font-size: (($size-title - 3) - ($removeFactor * $y));
				$marginHorizontal: ($gap-medium * (6 - $i));
				margin: $marginHorizontal 0 math.div($marginHorizontal, 2) ($gap-medium * $y);

				color: darken($color-primary-500, $y * 9);
			}
		}
	}
</style>

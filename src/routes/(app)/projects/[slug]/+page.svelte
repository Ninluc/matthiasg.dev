<script lang="ts">
	import TextSection from '$components/layout/main/contentSection/TextSection.svelte';
	import TitleHeader from '$components/layout/main/contentSection/TitleHeader.svelte';
	import Button from '$components/theme/Button.svelte';
	import CategoryChip from '$components/theme/CategoryChip.svelte';

	import { format, parse } from 'date-fns';

	export let data;
</script>

<TitleHeader>
	<h2>{data.title}</h2>
	<div class="work-info-container">
		<div class="work-info">
			<CategoryChip category={data.category} />
			<p class="write-date">
				<time datetime={format(parse(data.date, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd')}
					>{data.date}</time
				>
			</p>
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
	<article class="work-content">
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

		@media only screen and (max-width: $screen-small) {
			font-size: clamp(30px, $size-title, 10vw);
		}
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

			// background: $color-completelyblack;
			background: $color-completelyblack;
			// background: $color-surface;

			border-radius: $theme-borderradius;
			opacity: 0;

			animation: fadeIn $transition-time-medium $transition-timingfunction 300ms forwards;

			p {
				margin: 0;
			}

			p.write-date,
			p.project-date {
				font: $main;
				color: $font-color-on-surface;
			}

			@keyframes fadeIn {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}
		}
	}

	:global(article.work-content) {
		width: 100%;

		:global(h3),
		:global(h4),
		:global(h5),
		:global(h6) {
			font: $title;
			line-height: $lineheight-title;
			// font-family: $family-main;
		}

		@supports selector(:has(img)) {
			:global(a:not(:has(img))) {
				display: inline-block;

				font-style: normal;

				transform: skewX(-7deg);
				transform-origin: bottom;

				&:hover {
					transform: skewX(0deg);
				}
			}
		}

		:global(p),
		:global(p > a),
		:global(ul > li) {
			@media only screen and (max-width: $screen-small) {
				font-size: 18px;
			}
		}

		$removeFactor: $size-title * 0.1;
		@for $i from 3 through 6 {
			:global(h#{$i}) {
				$y: $i - 3;
				$z: $i - 2;
				font-size: clamp(30px, ((($size-title - 3rem) - ($removeFactor * $y))), 6vw) !important;
				// font-size: ($size-title - 3) - ($removeFactor * $y);
				$marginHorizontal: ($gap-medium * (6 - $i));
				margin: $marginHorizontal 0 math.div($marginHorizontal, 2) ($gap-medium * $y);

				color: darken($color-primary-500, $y * 9);
			}
		}

		// Images
		:global(img) {
			border-radius: $theme-borderradius;
			margin: $gap-small 0 $gap-medium 0;

			max-width: 100%;
		}

		// Code
		:global(pre) {
			width: 100%;

			padding: $gap-medium;

			font-size: 1.1rem;

			background: $color-completelyblack;
			// background: $color-surface;

			border-radius: $theme-borderradius;

			overflow-x: auto;

			@media only screen and (max-width: $screen-small) {
				font-size: 14.4px;
			}
		}
	}

	// Code color
	:global(:root) {
		--shiki-color-text: #{$color-primary-500};
		--shiki-color-background: #{$color-secondary};
		--shiki-token-constant: #{$color-tertiary};
		--shiki-token-string: #{$color-warning-300};
		--shiki-token-comment: #{$color-surface-400};
		--shiki-token-keyword: #{$color-success-500};
		--shiki-token-parameter: #1eff00;
		--shiki-token-function: #{$color-warning-600};
		--shiki-token-string-expression: #{$color-primary-700};
		--shiki-token-punctuation: #{$color-primary-600};
		--shiki-token-link: #{$color-primary-800};

		/* Only required if using ansiToHtml function */
		--shiki-color-ansi-black: #000000;
		--shiki-color-ansi-black-dim: #00000080;
		--shiki-color-ansi-red: #bb0000;
		--shiki-color-ansi-red-dim: #bb000080;
		--shiki-color-ansi-green: #00bb00;
		--shiki-color-ansi-green-dim: #00bb0080;
		--shiki-color-ansi-yellow: #bbbb00;
		--shiki-color-ansi-yellow-dim: #bbbb0080;
		--shiki-color-ansi-blue: #0000bb;
		--shiki-color-ansi-blue-dim: #0000bb80;
		--shiki-color-ansi-magenta: #ff00ff;
		--shiki-color-ansi-magenta-dim: #ff00ff80;
		--shiki-color-ansi-cyan: #00bbbb;
		--shiki-color-ansi-cyan-dim: #00bbbb80;
		--shiki-color-ansi-white: #eeeeee;
		--shiki-color-ansi-white-dim: #eeeeee80;
		--shiki-color-ansi-bright-black: #555555;
		--shiki-color-ansi-bright-black-dim: #55555580;
		--shiki-color-ansi-bright-red: #ff5555;
		--shiki-color-ansi-bright-red-dim: #ff555580;
		--shiki-color-ansi-bright-green: #00ff00;
		--shiki-color-ansi-bright-green-dim: #00ff0080;
		--shiki-color-ansi-bright-yellow: #ffff55;
		--shiki-color-ansi-bright-yellow-dim: #ffff5580;
		--shiki-color-ansi-bright-blue: #5555ff;
		--shiki-color-ansi-bright-blue-dim: #5555ff80;
		--shiki-color-ansi-bright-magenta: #ff55ff;
		--shiki-color-ansi-bright-magenta-dim: #ff55ff80;
		--shiki-color-ansi-bright-cyan: #55ffff;
		--shiki-color-ansi-bright-cyan-dim: #55ffff80;
		--shiki-color-ansi-bright-white: #ffffff;
		--shiki-color-ansi-bright-white-dim: #ffffff80;
	}
</style>

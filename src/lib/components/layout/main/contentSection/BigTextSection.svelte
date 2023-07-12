<script lang="ts">
	import { onMount } from 'svelte';
	import { TextSliderUpper } from '$components/layout/scripts/TextSliderUpper';
	import ContentSectionClassAppearOnce from './base/ContentSectionClassAppearOnce.svelte';

	export let speedDeacrease = 0.95;
	export let wordDelay = 80;

	let p: HTMLElement;
	let slider: TextSliderUpper;

	onMount(() => {
		slider = new TextSliderUpper(p, wordDelay, speedDeacrease);
	});
</script>

<ContentSectionClassAppearOnce>
	<p bind:this={p}><slot /></p>
</ContentSectionClassAppearOnce>

<style lang="scss">
	$text-height: 1.2em;

	p {
		font: $title;
		color: $font-color-on-surface;

		text-transform: uppercase;
		text-align: center;
		line-height: $text-height;

		opacity: 0;

		& > :global(span) {
			height: $text-height;
			overflow: hidden;
			opacity: 0;
			animation: $transition-time-long $transition-timingfunction forwards;
		}

		@media only screen and (max-width: $screen-small) {
			font-size: $size-title * 0.8;
		}
		@media only screen and (max-width: $screen-xsmall) {
			font-size: $size-title * 0.6;
		}
		@media only screen and (max-width: $screen-xxsmall) {
			font-size: $size-title * 0.4;
		}
		@media only screen and (max-width: $screen-xxxsmall) {
			font-size: $size-title * 0.2;
		}
	}

	// When in viewport
	:global(main section.content-section.content-section__appear) > p {
		opacity: 1;

		& > :global(span) {
			display: inline-block !important;
			animation-name: slideUp;
		}
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY($text-height);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>

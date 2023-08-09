<script lang="ts">
	export let colorType: 'cta' | 'secondary' | 'surface' | 'busy' = 'cta';
	export let buttonType: 'link' | 'button' = 'link';

	const buttonTypeHTMLElement = buttonType === 'link' ? 'a' : 'button';

	const colors = {
		cta: 'var(--color-cta)',
		secondary: 'var(--color-secondary)',
		surface: 'var(--color-surface)',
		busy: 'var(--color-busy)'
	};
</script>

<svelte:element
	this={buttonTypeHTMLElement}
	{...$$restProps}
	style="--bgc: {colors[colorType]}; --bgc-hover: {colors[colorType].slice(0, -1) + '-hover)'};"
	><span><slot /></span></svelte:element
>

<style lang="scss">
	a,
	button {
		// Variables
		--color-cta: #{$color-tertiary};
		--color-cta-hover: #{$color-tertiary-600};
		--color-secondary: #{$color-completelyblack};
		--color-secondary-hover: #{$color-completelyblack-400};
		--color-surface: #{$color-surface};
		--color-surface-hover: #{$color-surface-400};
		--color-busy: #{$color-surface-300};
		--color-busy-hover: #{$color-surface-400};

		padding: $gap-medium;

		@include linkMain;
		font-style: normal;
		color: $color-primary;

		text-decoration: none;

		background-color: var(--bgc);

		border: none;
		border-radius: $theme-borderradius;

		transition: background-color $transition-time-small $transition-timingfunction;

		cursor: pointer;

		span {
			display: block;
			transform: skewX(-9deg);
			transform-origin: bottom;

			transition: transform $transition-time-small $transition-timingfunction;
		}

		&:hover,
		&:focus {
			background-color: var(--bgc-hover);

			span {
				transform: skewX(0deg);
			}
		}
	}
</style>

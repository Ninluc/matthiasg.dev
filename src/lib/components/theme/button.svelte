<script lang="ts">
	export let href: string;
	export let type: 'cta' | 'secondary' = 'cta';

	const colors = {
		cta: 'var(--color-cta)',
		secondary: 'var(--color-secondary)'
	};
</script>

<a
	{href}
	{...$$restProps}
	style="--bgc: {colors[type]}; --bgc-hover: {colors[type].slice(0, -1) + '-hover)'};"
	><span><slot /></span></a
>

<style lang="scss">
	a {
		// Variables
		--color-cta: #{$color-tertiary};
		--color-cta-hover: #{$color-tertiary-600};
		--color-secondary: #{$color-completelyblack};
		--color-secondary-hover: #{$color-completelyblack-400};

		padding: $gap-medium;

		@include linkMain;
		font-style: normal;
		color: $color-primary;

		background-color: var(--bgc);

		text-decoration: none;

		border-radius: $theme-borderradius;

		transition: background-color $transition-time-small $transition-timingfunction;

		span {
			display: block;
			transform: skewX(-9deg);
			transform-origin: bottom;

			transition: transform $transition-time-small $transition-timingfunction;
		}

		&:hover {
			background-color: var(--bgc-hover);

			span {
				transform: skewX(0deg);
			}
		}
	}
</style>

<code><slot /></code>

<style lang="scss">
	@use 'sass:math';

	code {
		background-color: $color-secondary;

		padding: math.div($gap-small, 2);

		border-radius: math.div($theme-borderradius, 4);

		font-size: 1.1rem;

		@media only screen and (max-width: $screen-small) {
			font-size: 16px;
		}
	}
</style>

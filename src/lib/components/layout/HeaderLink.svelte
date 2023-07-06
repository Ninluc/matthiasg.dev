<script lang="ts">
	export let href: string = '/';
</script>

<a {href}><slot /></a>

<style lang="scss">
	a {
		display: block;

		font: $headerlink;
		letter-spacing: $letterspacing-headerlink;
		color: $font-color-on-surface;

		text-decoration: underline;
		text-decoration-skip-ink: all;
		text-decoration-color: $color-completelyblack;

		transform: skewX(-9deg);
		transform-origin: bottom;

		transition: all $transition-time-small $transition-timingfunction;

		&:hover {
			text-decoration-color: $font-color-on-surface;

			transform: skewX(-4deg);
		}
	}
</style>

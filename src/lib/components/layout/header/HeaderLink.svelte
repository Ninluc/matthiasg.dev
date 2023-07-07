<script lang="ts">
	import { page } from '$app/stores';

	export let href: string = '/';
</script>

<a {href} class:currentLink={$page.url.pathname + $page.url.hash === href}><slot /></a>

<style lang="scss">
	a {
		display: block;

		font: $headerlink;
		letter-spacing: $letterspacing-headerlink;
		color: $color-primary-500;

		text-decoration: underline;
		text-decoration-skip-ink: all;
		text-decoration-color: $color-completelyblack;

		transform: skewX(-9deg);
		transform-origin: bottom;

		transition: all $transition-time-small $transition-timingfunction;

		&:hover,
		&:focus-visible {
			color: $color-primary-100;

			text-decoration-color: $color-primary-100;

			transform: skewX(-4deg);
		}

		&.currentLink {
			text-decoration-color: $font-color-on-surface;
		}
	}
</style>

<script lang="ts">
	export let href: string;
	export let target: string = '_self';
</script>

<a {href} {target}>
	<slot />
</a>

<style lang="scss">
	a {
		font: $linkmain;
		color: $color-primary-500;
		text-decoration: none;

		transition: color $transition-time-small $transition-timingfunction;

		&:hover {
			color: $color-primary-300;
		}
	}
</style>

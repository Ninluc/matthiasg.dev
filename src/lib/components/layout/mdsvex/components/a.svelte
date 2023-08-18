<script lang="ts">
	export let href: string;

	let isLocalPage = href.startsWith('http') ? false : true;
</script>

<a {href} target={isLocalPage ? '' : '_blank'} {...$$restProps}><slot /></a>

<style lang="scss">
	a {
		@include linkMain;
		color: $color-tertiary;

		transition: color $transition-time-small $transition-timingfunction,
			transform $transition-time-small $transition-timingfunction;

		&:hover, &:focus {
			color: $color-tertiary-700;
		}
	}
</style>

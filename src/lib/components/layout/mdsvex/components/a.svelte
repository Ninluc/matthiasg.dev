<script lang="ts">
	import { onMount } from "svelte";

	export let href: string;

	let htmlEl: HTMLAnchorElement;

	let isLocalPage = href.startsWith('http') ? false : true;

	onMount(() => {
		const text = htmlEl.innerText;
		htmlEl.setAttribute('aria-label', text);

		if (!isLocalPage) {
			htmlEl.setAttribute('title', `${text} : ${href}`);
		}
	})
</script>

<a {href} target={isLocalPage ? '' : '_blank'} {...$$restProps} bind:this={htmlEl}><slot /></a>

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

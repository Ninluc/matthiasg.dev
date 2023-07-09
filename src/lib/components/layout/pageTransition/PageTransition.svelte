<script lang="ts">
	import { slide } from '$components/theme/transition/slide';
	import { direction } from '$stores/layout/pageTransitionDirection';
	import { expoOut } from 'svelte/easing';
	import type { EasingFunction } from 'svelte/transition';

	export let duration: number = 1000;
	export let easing: EasingFunction = expoOut;
</script>

<div
	in:slide={{ duration: duration, easing: easing, toDirection: $direction }}
	out:slide={{ duration: duration, easing: easing, toDirection: $direction }}
>
	<slot />
</div>

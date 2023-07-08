<script lang="ts">
	// @ts-nocheck // TODO: Add proper types, find the one that include the
	// options parameter

	import { slide } from '$components/theme/transition/slide';

	export let direction: 'left' | 'right';
	console.log('direction =' + direction);
</script>

<div
	in:slide={{ toDirection: direction }}
	out:slide={{ toDirection: direction === 'left' ? 'right' : 'left' }}
>
	<slot />
</div>

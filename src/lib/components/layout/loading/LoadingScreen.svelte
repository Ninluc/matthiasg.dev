<script lang="ts">
	import { loadingFinished } from '$stores/layout/loadingFinished';
	import * as ThretleExtras from '@threlte/extras';
	import { cubicOut } from 'svelte/easing';
	import { tweened, type Tweened } from 'svelte/motion';

	const { progress } = ThretleExtras.useProgress();

	let percentLoaded: Tweened<number>;
	$: percentLoaded = tweened(0, {
		duration: 1000,
		delay: 300,
		easing: cubicOut
	});

	$: $percentLoaded = $progress * 100;

	$: {
		if ($percentLoaded >= 100) {
			loadingFinished.set(true);
		}
	}
</script>

<div>loading {$percentLoaded}%</div>

<style lang="scss">
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;

		background-color: #000000;
		color: #ffffff;

		display: flex;
		justify-content: center;
		align-items: center;

		z-index: 10000;
	}
</style>

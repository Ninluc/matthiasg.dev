<script lang="ts">
	import { bootText } from '$stores/layout/bootText';
	import { loadingFinished } from '$stores/layout/loadingFinished';
	import * as ThretleExtras from '@threlte/extras';
	import { cubicOut } from 'svelte/easing';
	import { tweened, type Tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	const { progress } = ThretleExtras.useProgress();

	let loadingScreenText: HTMLDivElement;
	let loadingLineIndex: number = 0;

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

	$: {
		if (loadingScreenText) {
			const number = $percentLoaded.toFixed(2);

			loadingScreenText.innerText =
				loadingScreenText.innerText +
				`[ ${number.padStart(6, ' ')}% ] ` +
				bootText[loadingLineIndex] +
				'\n';
			loadingLineIndex++;
		}
	}
</script>

<div out:fade={{ delay: 100, duration: 300, easing: cubicOut }}>
	<p bind:this={loadingScreenText} />
</div>

<style lang="scss">
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;

		background-color: #000000;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		z-index: 10000;

		p {
			margin: 0px;

			font: $loading;

			color: #ffffff;
		}
	}
</style>

<script lang="ts">
	import * as Threlte from '@threlte/core';
	import * as ThretleExtras from '@threlte/extras';
	import * as Three from 'three';
	import * as Utils from 'three/src/math/MathUtils';
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';
	import { cubicOut } from 'svelte/easing';
	import { pane } from './pane';
	import BigText from '../BigText.svelte';
	import { navigating, page } from '$app/stores';
	import { animationFinished } from '$stores/layout/animationFinished';
	import { loadingFinished } from '$stores/layout/loadingFinished';
	import ContentSection from '../base/ContentSection.svelte';
	import { tweened, type Tweened } from 'svelte/motion';

	const singleHeadThreshold = 600;

	let pageWidth: number = 0;
	let pageHeight: number = 0;
	let containerHeight: number = 0;
	let containerWidth: number = 0;
	let scrollY: number = 0;

	let componentIsMounted: boolean = false;

	// Set animationFinished to false
	animationFinished.set(false);

	/* 
	2112 x 1103: 31
	896 x 1513: 64

	896 / 2112 = 0.42
	1513 / 1103 = 1.37

	0.42 * 6 = 2.53 ~
	*/

	function getHeadDistanceByWidth(width: number): number {
		if (pageWidth <= singleHeadThreshold) return 0;
		return Math.max(0, Utils.lerp(18, 0, 465 / width));
	}

	let camera: any;
	let head: any;
	let head2: any;
	let directionalLight: any;
	let ambientLight: any;

	let directionalLightObject: any;

	let gridHelper: any;
	let axesHelper: any;
	let lightHelper: any;

	// const tanFov = Math.tan( ( ( Math.PI / 180 ) * 50 / 2 ) );s
	$: camera = {
		position: { x: 0, y: 0, z: 31 },
		rotation: { x: 0, y: 0, z: 0 },
		fov: 50
	};

	$: head = {
		position: { x: -getHeadDistanceByWidth(pageWidth), y: -4.3, z: 0 },
		rotation: { x: 0, y: -0.3, z: 0 },
		scale: 1
	};

	$: head2 = {
		position: { x: getHeadDistanceByWidth(pageWidth), y: -4.3, z: 0 },
		rotation: { x: 0, y: 0.3, z: 0 },
		scale: { x: -1, y: 1, z: 1 }
	};

	onMount(() => {
		componentIsMounted = true;
		directionalLight = {
			color: { r: 255, g: 255, b: 255 },
			intensity: 2,
			position: { x: 0, y: 0, z: 0 },
			shadow: {
				camera: { left: 8 }
			}
		};

		ambientLight = {
			color: { r: 255, g: 255, b: 255 },
			intensity: 0.5
		};

		gridHelper = new Three.GridHelper(20, 20, 0x0000ff, 0x808080);
		axesHelper = new Three.AxesHelper(10);
		// $: lightHelper = new Three.DirectionalLightHelper( directionalLightObject, 5 );
	});

	// Launch the animation
	if (dev && false) {
		pane(camera, head, directionalLight, ambientLight);
	}

	// Launch the animation
	let headFrom: any;
	let headTo: any;
	let headFrom2: any;
	let headTo2: any;

	type HeadsTransition = {
		position: { x: number; y: number; z: number };
		rotation: { x: number; y: number; z: number };
	};
	let timeStart: number;
	function entryAnimation(
		time: number,
		fromHeads: [HeadsTransition, HeadsTransition],
		toHeads: [HeadsTransition, HeadsTransition],
		timeStamp: number
	) {
		if (timeStart === undefined) {
			timeStart = Date.now();
		}
		let timeNow: number = Date.now();
		let timeElapsed: number = timeNow - timeStart;
		let t: number = cubicOut(timeElapsed / time);

		head.position.x = Utils.lerp(fromHeads[0].position.x, toHeads[0].position.x, t);
		head.position.z = Utils.lerp(fromHeads[0].position.z, toHeads[0].position.z, t);
		head.rotation.y = Utils.lerp(fromHeads[0].rotation.y, toHeads[0].rotation.y, t);
		head2.position.x = Utils.lerp(fromHeads[1].position.x, toHeads[1].position.x, t);
		head2.rotation.y = Utils.lerp(fromHeads[1].rotation.y, toHeads[1].rotation.y, t);

		if (
			head.position.x >= toHeads[0].position.x ||
			// timeElapsed >= time ||
			($navigating?.type === 'link' && $navigating?.to?.url.pathname !== '/')
		) {
			animationFinished.set(true);
			return;
		}

		return requestAnimationFrame((timeStamp) => {
			entryAnimation(time, fromHeads, toHeads, timeStamp);
		});
	}

	let animationHasPlayed: boolean = false;
	$: {
		if (browser && $loadingFinished && !animationHasPlayed && componentIsMounted) {
			animationHasPlayed = true;
			headFrom = {
				position: { x: -70, y: -4.3, z: -30 },
				rotation: { x: 0, y: 230 * Utils.DEG2RAD, z: 0 },
				scale: { x: 1, y: 1, z: 1 }
			};
			headTo = {
				position: { x: -getHeadDistanceByWidth(pageWidth), y: -4.3, z: 0 },
				rotation: { x: 0, y: -0.3, z: 0 },
				scale: { x: 1, y: 1, z: 1 }
			};
			headFrom2 = {
				position: { x: -headFrom.position.x, y: -4.3, z: 0 },
				rotation: { x: 0, y: -headFrom.rotation.y, z: 0 },
				scale: { x: -1, y: 1, z: 1 }
			};
			headTo2 = {
				position: { x: getHeadDistanceByWidth(pageWidth), y: -4.3, z: 0 },
				rotation: { x: 0, y: -headTo.rotation.y, z: 0 },
				scale: { x: -1, y: 1, z: 1 }
			};
			console.log('playin animation');
			requestAnimationFrame((timeStamp) => {
				entryAnimation(100 * 15, [headFrom, headFrom2], [headTo, headTo2], timeStamp);
			});
		}
	}

	// Update camera angle
	let factor: number;
	const cameraFrom = {
		position: { x: 0, y: 0, z: 31 },
		rotation: { x: 0, y: 0, z: 0 },
		fov: 50
	};
	const cameraTo = {
		position: { x: 0, y: -30, z: 0 }
	};
	let tweenedScrollY: Tweened<number>;
	tweenedScrollY = tweened(0, {
		duration: 900,
		easing: cubicOut
	});
	const scrollBegin = 40;
	$: $tweenedScrollY = $animationFinished && scrollY > scrollBegin ? scrollY : 0;
	$: {
		if ($animationFinished && $tweenedScrollY) {
			factor = $tweenedScrollY / pageHeight;
			if (factor <= 1) {
				camera.position.y = Utils.lerp(cameraFrom.position.y, cameraTo.position.y, factor);
				camera.rotation.x =
					(90 -
						(90 -
							Math.atan(Math.abs(camera.position.y) / Math.abs(camera.position.z)) *
								Utils.RAD2DEG)) *
					Utils.DEG2RAD;

				console.log(90 - (90 - Math.abs(camera.position.y) / Math.abs(camera.position.z)));
			}
		}
	}
</script>

<svelte:window bind:innerWidth={pageWidth} bind:innerHeight={pageHeight} bind:scrollY />

<ContentSection class={$loadingFinished ? 'content-section__appear' : ''}>
	<!-- <div class="canva-container" bind:clientHeight={containerHeight} bind:clientWidth={containerWidth}>  -->
	<Threlte.Canvas
		rendererParameters={{ antialias: true }}
		size={{ width: pageWidth, height: pageHeight }}
	>
		<!-- Helpers -->
		<!-- <Thretle.Object3DInstance object={gridHelper} /> -->
		<!-- <Thretle.Object3DInstance object={axesHelper} /> -->
		<!-- {#if lightHelper}
			<Thretle.Object3DInstance object={lightHelper} />
			{/if} -->

		<!-- Camera -->
		<Threlte.PerspectiveCamera {...camera} lookAt={undefined}>
			<!-- Controls -->
			<Threlte.OrbitControls enabled={false} />
		</Threlte.PerspectiveCamera>

		<!-- Lights the scene equally -->
		<Threlte.AmbientLight {...ambientLight} />

		<!-- Light that casts a shadow -->
		<Threlte.DirectionalLight {...directionalLight} bind:light={directionalLightObject} />

		<!-- 
			without draco : 6.83MB / 2.29s | 5.59 MB (5.59 MB size) / 622ms
			with draco : 6.83MB / 1.78s | 5.59 MB (5.59 MB size) / 252ms
			→ Size doesn't change, but loading time is divided by 2.5
		 -->
		<!-- Head -->
		<!-- <Threlte.Mesh
			{...head}
			geometry={new Three.SphereGeometry(4, 64, 64)}
			material={new Three.MeshStandardMaterial({ color: 'white' })}
		/> -->
		<ThretleExtras.GLTF url="assets/3d/davidHead.glb" useDraco="true" {...head} />
		{#if pageWidth > singleHeadThreshold}
			<ThretleExtras.GLTF url="assets/3d/davidHead.glb" {...head2} />
		{/if}
	</Threlte.Canvas>
	<!-- </div> -->

	<BigText>Hello</BigText>
</ContentSection>

<style lang="scss">
	:global(p) {
		margin: 0px;
	}
</style>

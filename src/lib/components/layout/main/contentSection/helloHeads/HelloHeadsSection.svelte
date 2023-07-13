<script lang="ts">
	import * as Thretle from '@threlte/core';
	import * as ThretleExtras from '@threlte/extras';
	import * as Three from 'three';
	import * as Utils from 'three/src/math/MathUtils';
	import ContentSectionClassAppearOnce from '../base/ContentSectionClassAppearOnce.svelte';
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';
	import { cubicOut } from 'svelte/easing';
	import { pane } from './pane';
	import BigText from '../BigText.svelte';

	const singleHeadThreshold = 600;

	let pageWidth:number = 0;
	let pageHeight:number = 0;
	let containerHeight:number = 0;
	let containerWidth:number = 0;

	/* 
	2112 x 1103: 31
	896 x 1513: 64

	896 / 2112 = 0.42
	1513 / 1103 = 1.37

	0.42 * 6 = 2.53 ~
	*/


	function getHeadDistanceByWidth(width:number):number {
		if (pageWidth <= singleHeadThreshold) return 0;
		return Math.max(0 , Utils.lerp(18, 0, 465 / width));
	}

	let camera:any;
	let head:any;
	let head2:any;
	let directionalLight:any;
	let ambientLight:any;

	let directionalLightObject:any;

	let gridHelper:any;
	let axesHelper:any;
	let lightHelper:any;

	// const tanFov = Math.tan( ( ( Math.PI / 180 ) * 50 / 2 ) );s
	$: camera = {
		position: { x: 0, y: 0, z: 31 },
		rotation: { x: 0, y: 0, z: 0 },
		fov: 50
	};

	$: head = {
		position: { x: -getHeadDistanceByWidth(pageWidth), y: -4.3, z: 0 },
		rotation: { x: 0, y: -0.3, z: 0 },
		scale: 0.04
	}

	$: head2 = {
		position: { x: getHeadDistanceByWidth(pageWidth), y: -4.3, z: 0 },
		rotation: { x: 0, y: 0.3, z: 0 },
		scale: { x: -0.04, y: 0.04, z: 0.04}
	}

	onMount(() => {
		directionalLight = {
			color: {r: 255, g: 255, b: 255},
			intensity: 2,
			position: { x: 0, y: 0, z:0},
			shadow: {
				camera: { left: 8 }
			}
		}

		ambientLight = {
			color: {r: 255, g: 255, b: 255},
			intensity: 0.5
		}

		gridHelper = new Three.GridHelper(20, 20, 0x0000ff, 0x808080);
		axesHelper = new Three.AxesHelper(10);
		// $: lightHelper = new Three.DirectionalLightHelper( directionalLightObject, 5 );

		if (browser) {
			pane(camera, head, directionalLight, ambientLight);

			// Launch the animation
			const headFrom = {
				position: { x: -70, y: -4.3, z: -30 },
				rotation: { x: 0, y: 230 * Utils.DEG2RAD, z: 0 },
				scale: { x: 0.04, y: 0.04, z: 0.04}
			}
			const headTo = {
				position: { x: -getHeadDistanceByWidth(pageWidth), y: -4.3, z: 0 },
				rotation: { x: 0, y: -0.3, z: 0 },
				scale: { x: 0.04, y: 0.04, z: 0.04}
			}
			const headFrom2 = {
				position: { x: -headFrom.position.x, y: -4.3, z: 0 },
				rotation: { x: 0, y: -headFrom.rotation.y, z: 0 },
				scale: { x: -0.04, y: 0.04, z: 0.04}
			}
			const headTo2 = {
				position: { x: getHeadDistanceByWidth(pageWidth), y: -4.3, z: 0 },
				rotation: { x: 0, y: -headTo.rotation.y, z: 0 },
				scale: { x: -0.04, y: 0.04, z: 0.04}
			}

			type HeadsTransition = {
				position: { x: number; y: number; z: number };
				rotation: { x: number; y: number; z: number };
			};
			let counter:number = 0;
			function entryAnimation(
				time: number,
				fromHeads: [HeadsTransition, HeadsTransition],
				toHeads: [HeadsTransition, HeadsTransition]
			) {

				head.position.x = Utils.lerp(
					fromHeads[0].position.x,
					toHeads[0].position.x,
					cubicOut(counter / time)
				);
				head.position.z = Utils.lerp(
					fromHeads[0].position.z,
					toHeads[0].position.z,
					cubicOut(counter / time)
				);
				head.rotation.y = Utils.lerp(
					fromHeads[0].rotation.y,
					toHeads[0].rotation.y,
					cubicOut(counter / time)
				);
				head2.position.x = Utils.lerp(
					fromHeads[1].position.x,
					toHeads[1].position.x,
					cubicOut(counter / time)
				);
				head2.rotation.y = Utils.lerp(
					fromHeads[1].rotation.y,
					toHeads[1].rotation.y,
					cubicOut(counter / time)
				);

				counter++;

				if (head.position.x == toHeads[0].position.x) {
					return;
				}

				requestAnimationFrame(() => {entryAnimation(time, fromHeads, toHeads)});
			}

			entryAnimation(100, [headFrom, headFrom2], [headTo, headTo2]);

		}

	})
</script>

<svelte:window bind:innerWidth={pageWidth} bind:innerHeight={pageHeight} />

<ContentSectionClassAppearOnce>

	<!-- <div class="canva-container" bind:clientHeight={containerHeight} bind:clientWidth={containerWidth}>  -->
		<Thretle.Canvas rendererParameters={{ antialias: true }} size={{width: pageWidth, height: pageHeight}}>
			<!-- Helpers -->
			<!-- <Thretle.Object3DInstance object={gridHelper} /> -->
			<!-- <Thretle.Object3DInstance object={axesHelper} /> -->
			<!-- {#if lightHelper}
			<Thretle.Object3DInstance object={lightHelper} />
			{/if} -->

			<!-- Camera -->
			<Thretle.PerspectiveCamera {...camera} lookAt={undefined}>
				<!-- Controls -->
				<Thretle.OrbitControls enabled={false} />
			</Thretle.PerspectiveCamera>

			<!-- Lights the scene equally -->
			<Thretle.AmbientLight {...ambientLight} />

			<!-- Light that casts a shadow -->
			<Thretle.DirectionalLight
				{...directionalLight}
				bind:light={directionalLightObject}
			/>


			<!-- Head -->
			<ThretleExtras.GLTF url="assets/3d/davidHead.glb" {...head}/>
			{#if pageWidth > singleHeadThreshold}
			<ThretleExtras.GLTF url="assets/3d/davidHead.glb" {...head2}/>
			{/if}
		</Thretle.Canvas>
	<!-- </div> -->

	<BigText>Hello</BigText>
</ContentSectionClassAppearOnce>

<style lang="scss">
	p {
		margin: 0px;
	}
</style>

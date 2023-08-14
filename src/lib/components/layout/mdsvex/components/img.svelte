<script lang="ts">
	import { WORK_IMG_FOLDER, getWorkDocImage } from '$lib/scripts/layout/getWorkImg';
	import Img from '@zerodevx/svelte-img';

	export let src: string;
	const img = getWorkDocImage(src) as unknown as any[];
	export let alt: string;

	const isLocalImage = src.startsWith('http') ? false : true;
</script>

{#if isLocalImage}
	<Img src={img} {alt} height="unset" />
{:else}
	<img {src} {alt} loading="lazy" />
{/if}

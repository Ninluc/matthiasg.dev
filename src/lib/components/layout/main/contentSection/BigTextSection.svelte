<script lang="ts">
	import { browser } from '$app/environment';
	import BigText from './BigText.svelte';
	import ContentSectionClassAppearOnce from './base/ContentSectionClassAppearOnce.svelte';

	export let speedDeacrease = 0.95;
	export let wordDelay = 80;
</script>

<ContentSectionClassAppearOnce>
	<BigText {speedDeacrease} {wordDelay}><slot /></BigText>
</ContentSectionClassAppearOnce>

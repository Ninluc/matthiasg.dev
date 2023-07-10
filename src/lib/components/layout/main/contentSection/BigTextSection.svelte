<script>
	import { slide } from '$components/theme/transition/slide';
	import ContentSectionAppearOnce from './base/ContentSectionAppearOnce.svelte';
</script>

<ContentSectionAppearOnce>
	<p in:slide={{ duration: 500 }}><slot /></p>
</ContentSectionAppearOnce>

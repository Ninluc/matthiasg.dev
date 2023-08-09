<script lang="ts" context="module">
	import { h1, h2, h3, h4, a, img } from './components';

	export { h1, h2, h3, h4, a, img };
</script>

<slot />

<style lang="scss">
	:global(img) {
		max-width: 100%;
	}
</style>

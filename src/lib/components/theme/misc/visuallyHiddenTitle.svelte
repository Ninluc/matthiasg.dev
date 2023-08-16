<script lang="ts">
	export const headingLevel: number = 3;
	const heading = 'h' + headingLevel.toString();
</script>

<svelte:element this={heading} class=".visually-hidden"><slot /></svelte:element>

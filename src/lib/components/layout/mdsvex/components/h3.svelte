<script lang="ts">
	import { onMount } from 'svelte';
    import { toFragment } from '$lib/scripts/misc/toFragment.ts';

    let title: HTMLHeadingElement;

    onMount(() => {
        const text = title.innerText;
        title.id = toFragment(text);
    })
</script>

<h4 {...$$restProps} bind:this={title}><slot /></h4>

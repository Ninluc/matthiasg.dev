<script lang="ts">
	export let href: string = '/';
</script>

<a {href}><slot /></a>

<style lang="scss">
    a {
        font: $headerlink;
        letter-spacing: $letterspacing-headerlink;
        color: $font-color-on-surface;

        text-decoration: underline;
        text-decoration-skip-ink: all;
        text-decoration-color: $color-surface;

        transition: all $transition-time-small $transition-timingfunction;

        &:hover {
            text-decoration-color: $font-color-on-surface;
        }
    }
</style>

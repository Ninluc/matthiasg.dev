<section class="content-section">
    <slot />
</section>

<style lang="scss">
	$text-height: 1.2em;

    section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& > :global(*) {
			max-width: min(calc(100% - $gap-big), 28.5cm);
		}
        :global(p) {
            font: $main;
            color: $font-color-on-surface;
    
            text-align: left;
            line-height: $lineheight-main;
    
            & > :global(span) {
                height: $text-height;
                overflow: hidden;
                opacity: 0;
                animation: $transition-time-long $transition-timingfunction forwards;
            }
    
            @media only screen and (max-width: $screen-small) {
                font-size: $size-main * 0.8;
            }
            @media only screen and (max-width: $screen-xsmall) {
                font-size: $size-main * 0.6;
            }
            @media only screen and (max-width: $screen-xxsmall) {
                font-size: $size-main * 0.4;
            }
            @media only screen and (max-width: $screen-xxxsmall) {
                font-size: $size-main * 0.2;
            }
        }
	}

</style>

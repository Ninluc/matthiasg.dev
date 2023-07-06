<script>
  import HeaderLink from './HeaderLink.svelte';
</script>

<header>
    <nav>
        <ul>
            <li>
                <HeaderLink href="/">Accueil</HeaderLink>
            </li>
            <li>
                <HeaderLink href="/projects">Mes projets</HeaderLink>
            </li>
            <li>
                <HeaderLink href="/#contact">Contact</HeaderLink>
            </li>
        </ul>
    </nav>
</header>

<style lang="scss">
    $headerVerticalPadding: 68px;

    header {
        width: 100%;
        min-height: fit-content;
        height: 6dvh;
        max-height: 100dvh;

        padding: 0px $headerVerticalPadding;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        background-color: $color-completelyblack;

        nav {
            flex: 1;

            display: flex;
            justify-content: flex-end;
            align-items: center;
            
            ul {
                width: max-content;

                display: flex;
                justify-content: space-around;
                align-items: center;
                column-gap: 68px;

                list-style-type: none;
            }
        }
    }
</style>
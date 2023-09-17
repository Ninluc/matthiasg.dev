---
title: matthiasg.dev
category: personnel
date: '09/08/2023'
projectDate: "juin 2023 - aujourd'hui"
# projectLink: '/'
description: 'Ce site ! Un portfolio qui me sert aussi de site personnel. Fais avec svelte et hébergé sur mon raspberry pi.'
---

Ce site est un remplacement de mon ancien portfolio :
![Dessus de mon unique page de mon ancien portfolio](matthiasg-dev.oldPortfolio)

Il ne contenait qu'une seule page. Cette page avait des animations au scroll, du lerp et autres grâce à [locomotive scroll](https://github.com/locomotivemtl/locomotive-scroll). Une de mes premières librairies utilisée et une de mes préférées.

# Pourquoi remplacer ?

Cet ancien site (je vais essayer de le host qq part) ne me convenait plus. Il n'avait pas réellement de message et seulement quelques liens. Mais surtout, il ne me représentait pas...

J’ai donc tenté, par ce site, de me représenter (subtilement, le site parle de moi, mais ne dois pas être une autobiographie). Par exemple : les couleurs sombres (je suis un adepte du dark mode), Linux (page de chargement), Watch dogs (le [profiler](/#me)).

# Processus

J’ai commencé par faire des listes de ce que je voulais dans ce site. J’ai pris de l’inspiration de portfolios d'autres développeurs, mais également de designer (souvent plus intéressants). J'ai aussi choisi de la faire avec mon premier framework : [SvelteKit](https://kit.svelte.dev/).

Ensuite est venue la partie du design. Je voulais le faire sur une alternative open source et gratuite à [Figma](https://www.figma.com/). J'ai alors trouvé [Penpot](https://penpot.app/), mais après l'avoir utilisé pour tout ce projet, je ne suis pas très content du produit. Il n'existe qu'en version web (à part des packages obsolètes), le programme enlève des éléments sans que vous fassiez et `ctrl+z` ne fonctionne pas tout le temps. D'un autre côté, c'est un très beau projet maintenu qui utilise le SVG pour une meilleure compatibilité ([source](https://github.com/penpot/penpot#open-standardsw)).

*[SCSS]: Sassy CSS

Une fois le design fait, j'ai commencé par faire les constantes [SCSS](https://sass-lang.com/) des couleurs, polices et autres. Puis, j’ai fait le layout et quelques composants Svelte.

# Transitions entre les pages

Comme je l'ai dit dans le [TFE 2021-2022](./tfe-2021-2022#transitions-entre-les-pages), j'adore les transitions entre les pages. C'est d'ailleurs un des premiers points notés dans mes listes de choses que je voulais dans ce site.

*[SPA]: Single Page Application

SvelteKit pouvant donner une SPA, les transitions entre les pages peuvent être plus fluides, et surtout sans effet flash bang. Je voulais une transition de 'swipe' de droite à gauche ou inversement en fonction de la position de la page comme lien dans le `header`.

:::example Exemple
![Screenshot du header contenant deux liens : Accueil et Mes projets](matthiasg-dev.header)

Si je suis sur la page 'Accueil' et que je clique sur 'Mes projets', la transition va faire venir la page 'Mes projets' depuis la droite vers la gauche, car elle se trouve après 'Accueil' dans le `header`
:::

Pour savoir cet ordre, j'ai créé un fichier contenant une liste indexée avec un indice d'ordre et d'autres informations sur les pages utilisées ailleurs.

# Projets

Les pages présentant un projet comme celle-ci, sont écrites en [Markdown](https://en.wikipedia.org/wiki/Markdown). Elles sont transformées en composant grâce à [mdsvex](https://mdsvex.com/).

J'y ai ajouté quelques plugins et modification comme la colorisation de code avec [shiki](https://shiki.matsu.io/) : 
```js
console.log("Hello world !");
```

Des [admonitions](https://github.com/elviswolcott/remark-admonitions) :

:::info Info
Si vous voulez voir plus du fonctionnement de ce site, vous pouvez visiter le [dépôt GitHub](https://github.com/ninluc/matthiasg.dev)
:::

*[abbr]: Abréviation
Ou encore des abbr ([GitHub](https://github.com/Calyhre/gatsby-remark-abbr)).

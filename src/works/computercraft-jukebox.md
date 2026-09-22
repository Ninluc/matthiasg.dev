---
title: Stockage "Jukebox"
category: personnel
date: '2023-08-08'
projectDate: "Janvier 2023"
projectLink: 'https://github.com/Ninluc/ComputerCraft-Jukebox-Storage'
description: 'Un stockage "Jukebox" créé dans Minecraft à l''aide du mod "ComputerCraft:Tweaked".'
---

Un [système de stockage "jukebox"](https://fr.wikipedia.org/wiki/Librairie_de_sauvegarde) dans Minecraft réalisé avec
une "tortue" et un ordinateur du mod “[ComputerCraft:Tweaked](https://tweaked.cc/)”

Exemple d'utilisation :
![Vue d'ensemble d'un example d'utilisation](computercraft-jukebox.overview)

# ComputerCraft

ComputerCraft est un mod Minecraft qui rajoute des ordinateurs et périphériques programmables en [Lua](http://www.lua.org/).

Le mod rajoute aussi des "tortues", des ordinateurs qui peuvent bouger et interagir avec le monde.

![Tortues (images du wiki)](https://www.computercraft.info/wiki/images/b/bf/Turtles.png)

# Fonctionnement

Une fois le stockage construit, le programme paramétré et lancé, la tortue effectue un tour de la salle pour 'cartographier'
les coffres et leurs contenus.

Une fois fait, l'utilisateur peut utiliser l'ordinateur comme une console. Il peut lancer des commandes pour rechercher
des items dans la base de données, rechercher des items dans les coffres et les amener ou cartographier à nouveau si du stockage
a été modifié.

La tortue et l'ordinateur se parlent avec des protocoles personnalisés.

L'architecture du code est en forme de librairies, dont une partie proviennent d'anciens projets avec ComputerCraft comme
une tortue minière autonome.

:::info Information
Le code des librairies est assez bien documenté. Si vous voulez en prendre, regardez dans les dossiers `tools/` des
[trois dossiers principaux](https://github.com/Ninluc/ComputerCraft-Jukebox-Storage/tree/master/src)
:::

# État

Malheureusement, le projet n'avance plus. Il ne reste pas grand-chose pour qu'il fonctionne, mais le manque de temps
et surtout la qualité du code présent décourage. Mais qui sait, peut-être qu'un jour, je le terminerais et pourrais
l'utiliser dans une survie 😉.

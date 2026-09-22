---
title: PerceptronViewer
category: personnel
date: '2026-09-21'
projectDate: 'Janvier - Septembre 2026'
projectLink: 'https://abcd.matthiasg.dev/q/perceptron'
description: "Application web permettant d'expérimenter avec l'entraînement de réseaux de neurones simples."
---

Ce projet vient d'abord d'un cours de réseaux de neurones artificiels, que j'ai ensuite adapté au grand public en ajoutant un wiki est une interface adaptée. Il permet d'entraîner des réseaux de neurones sur un serveur, tout en affichant des mises à jour de l'entraînement en "live" à l'utilisateur.

# Contenu

L'interface commence avec une introduction aux réseaux de neurones. Les onglets suivants présentent le [perceptron simple](https://fr.wikipedia.org/wiki/Perceptron) et les améliorations faites chronologiquement, jusqu'au réseau multicouches.

Chaque onglet d'entraînement permettent de modifier les paramètres pour voir l'impact sur l'entraînement. Chaque paramètre est détaillé dans le wiki avec des exemples à faire.

[![Capture d'écran d'une page d'entraînement de réseau](perceptron-viewer.trainingInterface)](https://perceptron.matthiasg.dev/perceptron?type=adaline&utm_source=matthiasg.dev)

# Partie Technique

Dans l'essentiel : Laravel et Vue.js, "collés" ensemble avec [Inertia](https://inertiajs.com/). Pour envoyer les mises à jour de l'entraînement du serveur vers le client, j'utilise un websocket avec [Reverb](https://reverb.laravel.com/).

Pour l'entraînement, j'utilisais au début des queues avec des workers pour envoyer les mises à jour de l'entraînement. Mais, je me suis rendu compte qu'il était bien plus rapide de les envoyer directement dans le même thread d'entraînement.

Mon serveur principal étant un peu surchargé avec toutes mes applications self-host (notamment Jellyfin), j'ai déployé cette application sur mon ancien laptop, qui fait également du transcodage vidéo.

---

:::note Info
Envie d'apprendre les bases des réseaux de neurones artificiels ?
Rendez-vous sur [PerceptronViewer]({projectLink})
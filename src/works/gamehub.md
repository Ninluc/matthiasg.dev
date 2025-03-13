---
title: Gamehub
category: scolaire
date: '03/02/2025'
projectDate: 'Septembre - Décembre 2024'
projectLink: 'https://gamehub.matthiasg.dev'
description: "Plateforme communautaire dédiée aux joueurs, intégrant un forum, un chat et des événements, avec un système de gamification incluant de l'XP et des succès à débloquer."
---

Gamehub est un projet développé dans le cadre de mes études, réalisé en équipe de quatre personnes. L’objectif était de concevoir une plateforme interactive permettant aux joueurs d’échanger, de participer à des discussions, de trouver des partenaires de jeu et de se retrouver autour d’événements liés au jeu vidéo.

Le site propose plusieurs fonctionnalités essentielles :

- **Un forum** pour discuter de diverses thématiques autour du jeu vidéo. ![Vue forum](gamehub.forum)
- **Un chat en temps réel** pour interagir rapidement avec la communauté.
- **Un système de matchmaking** pour trouver d'autre joueur de son niveau.
- **Un système d’événements** permettant aux utilisateurs de participer à des tournois, sessions de jeux et autres activités.
- **Une gamification intégrée** avec un système de points d’expérience et de succès à débloquer, encourageant l’engagement et la participation. ![Vue du profil d'un joueur](gamehub.profil)

Gamehub a été conçu avec une attention particulière à l’expérience utilisateur, offrant une interface fluide et intuitive. Le projet a aussi été un excellent exercice de collaboration en équipe, nous obligeant à travailler ensemble sur l’architecture du site, la gestion des données et l’intégration des différentes fonctionnalités.

# Technologies utilisées

Gamehub repose sur un stack moderne combinant plusieurs technologies pour offrir une expérience fluide et interactive.  

- **Vue.js** pour l’interface utilisateur, permettant une expérience dynamique et réactive.  
- **Laravel** pour l’API backend, gérant l’authentification, la logique métier et les interactions avec la base de données.  
- [**Meilisearch**](https://www.meilisearch.com/) pour la recherche avancée, offrant des résultats rapides et pertinents grâce à son moteur performant.  
- **WebSockets** pour assurer la communication en temps réel dans le chat et les notifications.  
- **Jobs Workers** pour traiter les tâches en arrière-plan et optimiser les performances.  
- **API Twitch** pour récupérer les jeux multijoueurs et enrichir la plateforme avec des données actualisées sur les titres disponibles.
- **Tailwind CSS** et **ShadCN-Vue** pour un design moderne et cohérent.
- **Docker** pour le déploiement automatisé, avec un pipeline **CI/CD** facilitant l’intégration et la mise en production.

Ce choix technologique nous a permis de créer une plateforme robuste, évolutive et agréable à utiliser pour les joueurs.

:::info Info  
Envie d'en voir plus ? Rendez-vous sur [gamehub.matthiasg.dev](https://gamehub.matthiasg.dev) !  
:::

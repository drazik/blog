---
title: Veille de la semaine - 10/11/2016
author: Cyrille Jesmo Drazik
date: 2016-11-10
---

Cette semaine une mise à jour importante d'Atom pour qui n'utilise pas un
clavier US, l'histoire d'Unicode, une sensibilisation au chargement asynchrone
des web fonts, des outils pour développer des sites accessibles, un outil pour
voir son site développé avec React comme le robot de Google, et la suppression
de l'API Battery Status dans Firefox.

<span class="more"></span>

[Atom 1.12.0](https://github.com/atom/atom/releases/tag/v1.12.0) est sortit et
l'éditeur gère maintenant tous les layouts de claviers nativement. Il n'y a donc
plus besoin d'installer le package `keyboard-localization` dont je parlais dans
un [précédent article](/atom-crochet-accolade-fermant). L'équipe a d'ailleurs
expliqué dans un
[article sur son blog](http://blog.atom.io/2016/10/17/the-wonderful-world-of-keyboards.html)
pourquoi cette fonctionnalité a mit du temps à arriver.

[L'histoire d'Unicode et son adoption sur le web](https://jolicode.com/blog/l-histoire-d-unicode-et-son-adoption-sur-le-web) :
comme le nom l'indique, cet article nous explique pourquoi Unicode a été inventé,
comment il fonctionne et pourquoi il est depuis un moment maintenant un standard
sur le web.

[Web fonts, boy, I don't know](http://meowni.ca/posts/web-fonts/) : tout le
monde n'a pas toujours une connexion 4G ou fibre. Il est donc important de faire
en sorte que le contenu s'affiche le plus rapidement possible, en chargeant ce
qui n'est pas nécessaire à son affichage de manière asynchrone. Les web fonts
font partie de ces ressources qui ne sont pas nécessaires à l'affichage du
contenu, mais qui le retardent. Cet article a pour but de sensibiliser au
chargement asynchrone des web fonts.

[Tools for Developing Accessible Websites](https://bitsofco.de/tools-for-developing-accessible-websites/) :
une présentation de 6 outils permettant de tester l'accessibilité d'un site web.

[5 things you can do with Yarn](https://auth0.com/blog/five-things-you-can-do-with-yarn/) :
Yarn permet de faire des choses que ne permet pas npm : travail hors-ligne;
installation de packages issus de plusieurs registres; installation plus rapide
des packages; génération automatique d'un fichier `lock`; déterminisme qui
implique qu'avec le même `package.json`, deux machines auront le même
`node_modules` après l'installation.

[Testing a React-driven website’s SEO using “Fetch as Google”](https://medium.freecodecamp.com/using-fetch-as-google-for-seo-experiments-with-react-driven-websites-914e0fc3ab1#.grayaf9sf) :
en utilisant la Google Search Console, il est possible de voir comment le robot
de Google voit votre SPA.

[Battery Status API being Removed from Firefox due to Privacy Concerns](http://www.bleepingcomputer.com/news/software/battery-status-api-being-removed-from-firefox-due-to-privacy-concerns/) :
Mozilla a décidé de supprimer l'API Battery Status de Firefox car celle-ci
était surtout utilisée par les annonceurs qui s'en servaient pour tracker les
utilisateurs encore plus finement qu'auparavant.

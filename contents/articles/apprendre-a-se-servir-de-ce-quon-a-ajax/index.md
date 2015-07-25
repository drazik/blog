---
title: "Apprendre à se servir de ce qu'on a : la délégation d'événements"
author: Cyrille Jesmo Drazik
date: 2015-07-04
template: article.jade
---

Quel site web, aujourd'hui, n'utilise pas de requête AJAX, cette technologie permettant d'envoyer des requêtes HTTP à un serveur de manière asynchrone, et donc de rafraîchir des données affichées sans avoir à recharger la page en cours de consultation ? Celui que vous êtes en train de lire, certes... Mais aujourd'hui une grande majorité des sites web que vous visitez tirent très certainement parti d'AJAX. Mais au fait, quand on fait un `$.ajax()`, ça fait quoi pour de vrai ?

<span class="more"></span>

_Cet article est le sixième de la série ["apprendre à se servir de ce qu'on a"](/articles/apprendre-a-se-servir-de-ce-quon-a), ayant pour objectif de montrer que l'utilisation d'une bibliothèque telle que jQuery n'a pas toujours de sens. N'hésitez pas à parcourir les autres articles !_

## AJAX, ou plutôt XMLHttpRequest

https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest

## Faire pareil, mais sans

http://putaindecode.fr/posts/js/comment-se-passer-de-libraries-frameworks-javascript/

## Pour aller un peu plus loin: XMLHttpRequest 2, le retour

http://www.html5rocks.com/en/tutorials/file/xhr2/

## Pour finir

Comme pour la manipulation du DOM, du style des éléments de ce même DOM, des animations, de la délégation d'événements, et j'en passe, il est donc possible, pour les cas les plus courants, de se passer de jQuery pour faire des requêtes AJAX. L'important est de se poser la bonne question : est-ce que pour faire ce dont j'ai besoin, jQuery est nécessaire ?

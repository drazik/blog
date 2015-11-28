---
title: "Apprendre à se servir de ce qu'on a : AJAX"
author: Cyrille Jesmo Drazik
date: 2015-07-04
template: article.jade
---

Quel site web, aujourd'hui, n'utilise pas de requête AJAX, cette technologie permettant d'envoyer des requêtes HTTP à un serveur de manière (a)synchrone, et donc de rafraîchir des données affichées sans avoir à recharger la page en cours de consultation ? Celui que vous êtes en train de lire, certes... Mais aujourd'hui une grande majorité des sites web que vous visitez tirent très certainement parti d'AJAX. Mais au fait, quand on fait un `$.ajax()`, ça fait quoi ?

<span class="more"></span>

_Cet article est le sixième de la série ["apprendre à se servir de ce qu'on a"](/articles/apprendre-a-se-servir-de-ce-quon-a), ayant pour objectif de montrer que l'utilisation d'une bibliothèque telle que jQuery n'a pas toujours de sens. N'hésitez pas à parcourir les autres articles !_

## AJAX, ou plutôt XMLHttpRequest

AJAX = Asynchronous Javascript And XML. Pas une technologie mais un ensemble de technologies. La technologie "pivot" est XMLHttpRequest, introduit par Microsoft dans IE, puis adopté en tant que standard.
XHR permet d'envoyer des requêtes HTTP vers un serveur, sans avoir à rafraichir la page en cours d'affichage. Ces requêtes peuvent être synchrones ou asynchrones. Dans le premier cas, l'exécution du thread JS est interrompue et attend la réponse du serveur pour reprendre. Dans le second cas, le thread continue sa vie, et c'est un événement qui sera lancé pour le notifier de l'arrivée de la réponse de la part du serveur.
Il va sans dire que c'est la deuxième solution qui est la plus interessante.
Le nom "AJAX" est trompeur car le serveur ne renvoie pas forcément du XML. Plusieurs formats peuvent être gérés : texte brut, HTML, XML, JSON, données binaires (xhr 2 uniquement).

https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest

## Faire pareil, mais sans

Voyons voir comment fonctionne cet objet XMLHttpRequest.

### Envoyer une requête simple

D'abord il nous faut un objet...

```javascript
var xhr = new XMLHttpRequest();
```

Ensuite il faut dire sur quelle URL on veut faire notre requête et la méthode HTTP qu'on veut utiliser. Il est possible d'utiliser les méthodes GET et POST, ainsi qu'une plus spéciale, HEAD, qui permet de ne récupérer que l'entête de la réponse. Pour commencer, nous allons faire une simple requête en GET sur la page d'accueil du blog :

```javascript
xhr.open('GET', 'http://jesmodrazik.fr');
```

Il ne nous reste plus qu'à envoyer la requête :

```javascript
xhr.send(null);
```

Wait, c'est quoi ce `null` ? En fait, la méthode `send` prend en paramètre les paramètres qu'on veut passer à la requête dans le cas d'une requête en POST. Ce paramètre est obligatoire. Ici, on ne passe aucun paramètre, donc on lui passe `null`.

http://putaindecode.fr/posts/js/comment-se-passer-de-libraries-frameworks-javascript/
http://www.sitepoint.com/guide-vanilla-ajax-without-jquery/

## XMLHttpRequest 2, le retour

http://www.html5rocks.com/en/tutorials/file/xhr2/

## Le "futur" des requêtes asynchrones

http://www.sitepoint.com/javascript-goes-asynchronous-awesome/

## Pour finir

Ca commence à devenir répétitif, mais la conclusion reste évidemment toujours la même : comme pour la manipulation du DOM, du style des éléments de ce même DOM, des animations, de la délégation d'événements, et j'en passe, il est donc possible, pour les cas les plus courants, de se passer de jQuery pour faire des requêtes AJAX. L'important est de se poser la bonne question : est-ce que pour faire ce dont j'ai besoin, jQuery est nécessaire ?

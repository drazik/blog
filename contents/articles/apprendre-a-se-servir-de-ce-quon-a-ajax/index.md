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

AJAX (pour Asynchronous Javascript And XML) n'est pas une technologie en tant que telle, mais un ensemble de technologies. Ce concept se base en particulier sur l'objet `XMLHttpRequest` introduit par Microsoft dans Internet Explorer, qui a été par la suite standardisé.

`XMLHttpRequest` permet d'envoyer des requêtes HTTP vers un serveur sans avoir à rafraichir la page en cours d'affichage. Ces requêtes peuvent être synchrones ou asynchrones. Dans le premier cas, l'exécution du thread JS est interrompue et attend la réponse du serveur pour reprendre. Dans le second cas, le thread continue sa petite vie, et c'est un événement qui sera lancé pour le notifiier de l'arrivée de la réponse du serveur. Il va sans dire que c'est le deuxième cas qui est le plus intéressant, puisque le premier bloque tout interaction avec la page tant que la réponse n'est pas arrivée.

Le nom "AJAX" est trompeur car le serveur ne renvoie pas obligatoirement du XML. Plusieurs formats peuvent être gérés : texte brut, HTML, XML, JSON, données binaires...

## Faire pareil, mais sans

Voyons voir comment fonctionne cet objet XMLHttpRequest.

### Envoyer une requête simple, sans paramètre

D'abord il nous faut un objet...

```javascript
var xhr = new XMLHttpRequest();
```

Ensuite il faut dire sur quelle URL on veut faire notre requête et la méthode HTTP qu'on veut utiliser. Il est possible d'utiliser les méthodes GET et POST, ainsi qu'une plus spéciale, HEAD, qui permet de ne récupérer que l'entête de la réponse. Pour commencer, nous allons faire une simple requête en GET sur la page d'accueil du blog :

```javascript
xhr.open('GET', 'http://jesmodrazik.fr');
```

Il est possible de spécifier 3 autres paramètres :

* Un booléen spécifiant si la requête est asynchrone ou non. Par défaut celui-ci vaut `true`, donc la requête sera asynchrone
* Un login en cas d'identification nécessaire (type .htaccess)
* Le mot de passe qui va avec

Pour faire une requête HEAD ou POST, il suffit de spécifier la méthode souhaitée en premier paramètre.

Il ne nous reste plus qu'à envoyer la requête :

```javascript
xhr.send(null);
```

### Envoyer une requête avec des paramètres

Dans le cas d'une requête GET ou HEAD (qui n'est ni plus ni moins qu'une requête GET, à la différence près qu'on ne récupère que l'entête de la réponse), le passage de paramètres se fait dans l'URL qu'on passe à la méthode `open`, comme on le ferait dans la barre d'adresse de notre navigateur :

```javascript
xhr.open('GET', 'http://jesmodrazik.fr?param1=value2&param2=value2');
```

Dans le cas d'une requête POST, il faut d'abord préciser dans l'entête de la requête que les paramètres viennent d'un formulaire (même si ce n'est pas le cas) :

```javascript
xhr.open('POST', 'http://jesmodrazik.fr');
xhr.setRequestHeader('Content-Type', 'application/x-form-urlencoded');
```

Puis il faut passer les paramètres à la méthode `send` :

```javascript
xhr.send('param1=value1&param2=value2');
```

Dans les deux cas, il est nécessaire de convertir les paramètres qu'on veut passer à notre requête, afin que ceux-ci ne contiennent aucun caractère interdit dans une URL. Pour cela, il faut utiliser la fonction `encodeURIComponent` :

```javascript
// le caractère "&" a une signification dans une URL, il faut donc le convertir
var param1 = encodeURIComponent('value1&');
// ici, pas de caractère à convertir, mais dans le cas d'une saisie utilisateur, on ne peut pas prédire ce qu'on reçoit !
var param2 = encodeURIComponent('value2');

xhr.send('param1=' + param1 + '&param2=' + param2);
```

Maintenant qu'on sait envoyer une requête, il faudrait savoir...

### Récupérer la réponse

Qui dit asynchrone dit callback. On va donc commencer par attacher une fonction à un événement qui nous notifiera l'arrivée de la réponse :

```javascript
// Directement via onreadystatechange
xhr.onreadystatechange = function() {};

// Ou avec addEventListener
xhr.addEventListener('readystatechange', function() {});
```

Comme le nom de l'événement l'indique, nous n'écoutons pas réellement l'arrivée de la réponse, mais tout changement d'état de la requête. Le nombre d'état possible pour une `XMLHttpRequest` est de 5. Chaque état est représenté par un nombre entier, ainsi qu'une constante de l'objet `XMLHttpRequest` qui le représente :

* `XMLHttpRequest.UNSENT === 0` : on a un objet `XMLHttpRequest` tout frais sur lequel la méthode `open()` n'a pas encore été appelée
* `XMLHttpRequest.OPENED === 1` : la méthode `open()` a été appelée sur l'objet, mais pas la méthode `send()`
* `XMLHttpRequest.HEADERS_RECEIVED === 2` : la méthode `send()` a été appelée, la requête a été entièrement envoyée
* `XMLHttpRequest.LOADING === 3` : le serveur a commencé à renvoyer des données
* `XMLHttpRequest.DONE === 4` : on a reçu toutes les données de la réponse

Puisqu'on est intéressés uniquement par le dernier état, on va commencer par ajouter une condition sur celui-ci :

```javascript
xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {}
};
```

Il faut maintenant détecter si tout s'est bien passé. Si c'est le cas, alors la réponse du serveur doit avoir un code HTTP 2xx. Nouvelle condition :

```javascript
xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
            // OK
        } else {
            // Erreur
        }
    }
};
```

### Récupérer les données reçues




http://putaindecode.fr/posts/js/comment-se-passer-de-libraries-frameworks-javascript/
http://www.sitepoint.com/guide-vanilla-ajax-without-jquery/

## XMLHttpRequest 2, le retour

http://www.html5rocks.com/en/tutorials/file/xhr2/

## Le "futur" des requêtes asynchrones

http://www.sitepoint.com/javascript-goes-asynchronous-awesome/

## Pour finir

Ca commence à devenir répétitif, mais la conclusion reste évidemment toujours la même : comme pour la manipulation du DOM, du style des éléments de ce même DOM, des animations, de la délégation d'événements, et j'en passe, il est donc possible, pour les cas les plus courants, de se passer de jQuery pour faire des requêtes AJAX. L'important est de se poser la bonne question : est-ce que pour faire ce dont j'ai besoin, jQuery est nécessaire ?

---
title: "Apprendre à se servir de ce qu'on a : manipuler le DOM"
author: Cyrille Jesmo Drazik
date: 2015-03-21
template: article.jade
---

L'une des fonctionnalités majeures des jQuery-like est la manipulation du DOM (lien vers la définition du DOM?). Voyons comment faire pour manipuler le DOM sans utiliser de bibliothèque.

## Qu'est-ce que c'est quoi dis-donc que le DOM ?

Je ne vais pas réinventer la roue. La définition du DOM fournie par le Mozilla Developer Network (MDN), auquel je vais souvent faire référence dans cette liste d'articles, est parfaite :

> Le **Document Object Model** ou **DOM** (pour modèle objet de document) est une interface de programmation pour les documents HTML et XML. Il fournit une représentation structurée du document sous forme d'un arbre et définit la façon dont la structure peut être manipulée par les programmes, en termes de style et de contenu. Le DOM représente le document comme un ensemble de nœuds et d'objets possédant des propriétés et des méthodes. Cela permet de manipuler des pages web grâce à des scripts et/ou des langages de programmation.
> ([Référence du DOM sur le MDN](https://developer.mozilla.org/fr/docs/Web/API/R%C3%A9f%C3%A9rence_du_DOM_Gecko))

## Sélectionner des éléments

Pour travailler avec le DOM, la base c'est de pouvoir sélectionner des éléments, en vue de les modifier, de les supprimer, les cloner, les déplacer, etc. Avec un jQuery-like, ça se fait très simplement avec une fonction, souvent nommée `$` :

```javascript
var $element = $('#element');
var $buttons = $('button');
```

Pourtant, les navigateurs proposent une API pour faire la même chose : `document.querySelector` et `document.querySelectorAll`. `querySelector` renvoie le premier élément trouvé ou `null`. `querySelectorAll` renvoie une `NodeList` contenant tous les éléments trouvés (donc vide si aucun élément n'est trouvé). Voici donc comment faire la même chose que le code précédent, avec cette API :

```javascript
var element = document.querySelector('#element');
var buttons = document.querySelectorAll('button');
```

Il y a deux subtilités. La première, c'est cette `NodeList` renvoyée par `querySelectorAll`. On s'attendrait plutôt à obtenir un `Array`. En effet, `NodeList` n'expose pas toutes les méthodes pratiques qu'`Array` expose, et dont vous trouverez une liste [par ici](http://es5.github.io/#x15.4.4) (on s'arrête à EcmaScript 5 car nous ciblons IE8, mais si vous voulez utiliser des méthodes introduites avec EcmaScript 2015 - le nom officiel d'EcmaScript 6 -, vous pouvez chercher des polyfills). Pour des raisons de praticité, il vaut donc mieux transformer cette `NodeList` en `Array`. On va donc se recréer une fonction `getDOMElements` qui fait ça. Vous pouvez l'appeler comme vous voulez, `$` par exemple.

```javascript
function getDOMElements(selector) {
    var elements = document.querySelectorAll(selector);

    return Array.apply(null, elements);
}
```

La seconde, c'est que IE8 ne connait pas les sélecteurs CSS 3. Il n'est donc pas possible de les utiliser avec `querySelector` et `querySelectorAll`, ce qui peut être handicapant dans certains cas, mais il est souvent possible de se débrouiller sans. [Voici la liste des sélecteurs supportés par IE8](http://www.w3.org/TR/CSS2/selector.html) (ce sont les sélecteurs CSS 2.1, quoi).


## Créer des éléments

=> https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

## Insérer des bouts de DOM

=> document.createDocumentFragment
=> preprend : https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore?redirectlocale=en-US&redirectslug=DOM%2FNode.insertBefore
=> append : https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild?redirectlocale=en-US&redirectslug=DOM%2FNode.appendChild

## Cloner un élement

=> https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode

## Modifier les styles inline d'un élément

=> element.style.property = 'value';

## Gérer les classes d'un élément

=> http://caniuse.com/#feat=classlist
=> polyfill IE8+ https://developer.mozilla.org/en-US/docs/Web/API/Element/classList


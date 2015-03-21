---
title: Apprendre à se servir de ce qu'on a
author: Cyrille Jesmo Drazik
date: 2015-03-20
template: article.jade
---

L'une des fonctionnalités majeures des jQuery-like est la manipulation du DOM (lien vers la définition du DOM?).

Sélectionner des éléments
=> document.querySelector & document.querySelectorAll
=> transformer le NodeList en Array
=> IE 8 ne supporte que les sélecteurs CSS 2.1

Append/prepend des bouts de DOM
=> document.createDocumentFragment
=> preprend : https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore?redirectlocale=en-US&redirectslug=DOM%2FNode.insertBefore
=> append : https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild?redirectlocale=en-US&redirectslug=DOM%2FNode.appendChild

Cloner un élement du DOM
=> https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode

Modifier les styles inline
=> element.style.property = 'value';

Ajouter/Enlever/Toggle une class
=> http://caniuse.com/#feat=classlist
=> trouver une solution pour IE8/9 (polyfill ?)


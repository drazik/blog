---
title: "Apprendre à se servir de ce qu'on a : manipuler les styles des éléments"
date: "2015-05-14"
timeSensitive: true
---

Ajouter, modifier, supprimer des styles inline, des classes... Autant de choses
facilitées par les jQuery-like, mais tout aussi simple à faire sans.

<span class="more"></span>

_Cet article est le troisième de la série ["apprendre à se servir de ce qu'on
a"](/articles/apprendre-a-se-servir-de-ce-quon-a), ayant pour objectif de
montrer que l'utilisation d'une bibliothèque telle que jQuery n'a pas toujours
de sens. N'hésitez pas à parcourir les autres articles !_

## Manipuler les styles inline

Avec jQuery, on ferait ça de la manière suivante :

```js
var $element = $("#element")
$element.css("background-color", "#000")
$element.css({
  color: "#fff",
  display: "block",
})
```

Mais c'est tout aussi simple avec
[`HTMLElement.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
:

```js
var element = document.getElementById("element")
element.style.backgroundColor = "#000"
element.style.color = "#fff"
element.style.display = "block"
```

Toutefois on n'a pas la possibilité de passer directement un objet à
`HTMLElement.style`, comme on le fait avec la méthode `css` de jQuery, puisque
`HTMLElement.style` n'est pas un simple objet mais un `CSSStyleDeclaration`. La
liste des propriétés CSS accessibles accessible via `style` est disponible [sur
le
MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).

Pour modifier plusieurs propriétés d'un seul coup, il est quand même possible
d'utiliser `CSSStyleDeclaration.cssText` :

```js
element.style.cssText = "background-color: #000; color: #fff; display: block;"
```

Ca marche ©, mais c'est quand même beaucoup moins cool à lire qu'un objet.

- [Documentation de `CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)

## Manipuler les classes

Le plus simple pour gérer les classes d'un element, c'est
[`Element.className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className?redirectlocale=en-US&redirectslug=DOM%2Felement.className)
:

```js
var element = document.getElementById("element")
element.className = "toto"
```

Avec ce bout de code, l'élément ayant l'id `element` se verra attribuer la
classe "toto". Toutefois, si l'élément a plusieurs classes, l'affectation de
son `className` écrasera tout. On a donc besoin d'un moyen de gérer la liste
des classes de l'élément, et non pas la chaîne de caractères la représentant.
Ce qui nous mène à l'API
[`Element.classList`](tps://developer.mozilla.org/en-US/docs/Web/API/Element/classList?redirectlocale=en-US&redirectslug=DOM%2Felement.classList).

Cette API est très simple puisqu'elle n'expose que 4 méthodes : `add()`,
`remove()`, `toggle` et `contains`, donc les noms sont plutôt évocateurs :

```js
//<div id="element"></div>
element.classList.add("toto")
//<div class="toto" id="element"></div>
element.classList.remove("toto")
//<div class="" id="element"></div>
element.classList.toggle("toto")
//<div class="toto" id="element"></div>
element.classList.toggle("toto")
//<div class="" id="element"></div>
console.log(element.classList.contains("toto"))
// false
```

L'API `classList` n'est utilisable qu'à partir d'IE 10. Pour les versions
antérieures, il faut donc faire appel à un polyfill tel que celui fournit sur
[le
MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList?redirectlocale=en-US&redirectslug=DOM%2Felement.classList#wrapper)
qui est compatible jusqu'à IE 8.

Nous avons donc vu qu'il était possible de gérer les styles d'un élément du DOM
via ses styles inline, mais aussi sa liste de classes, et ce sans utiliser de
bibliothèque tierces (uniquement un minuscule polyfill dans le cas où de
vieilles versions d'IE devraient être supportées).

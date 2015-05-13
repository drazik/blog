---
title: "Apprendre à se servir de ce qu'on a : manipuler les styles des éléments"
author: Cyrille Jesmo Drazik
date: 2015-05-13
template: article.jade
---

Ajouter, modifier, supprimer des styles inline, des classes... Autant de choses facilitées par les jQuery-like, mais tout aussi simple à faire sans.

<span class="more"></span>

## Manipuler les styles inline

Avec jQuery, on ferait ça de la manière suivante :

```javascript
var $element = $('#element');
$element.css('background-color', '#000');
$element.css({
    color: '#fff',
    display: 'block'
});
```

Mais c'est tout aussi simple avec [`HTMLElement.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) :

```javascript
var element = document.getElementById('element');
element.style.backgroundColor = '#000';
element.style.color = '#fff';
element.style.display = 'block';
```

Toutefois on n'a pas la possibilité de passer directement un objet à `HTMLElement.style`, comme on le fait avec la méthode `css` de jQuery, puisque `HTMLElement.style` n'est pas un simple objet mais un `CSSStyleDeclaration`. La liste des propriétés CSS accessibles accessible via `style` est disponible [sur le MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).

Pour modifier plusieurs propriétés d'un seul coup, il est quand même possible d'utiliser `CSSStyleDeclaration.cssText` :

```javascript
element.style.cssText = 'background-color: #000; color: #fff; display: block;';
```

Ca marche ©, mais c'est quand même beaucoup moins cool à lire qu'un objet.

* [Documentation de `CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)

## Manipuler les classes

className, classList

http://www.alsacreations.com/article/lire/1498-lapi-classlist.html

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList?redirectlocale=en-US&redirectslug=DOM%2Felement.classList
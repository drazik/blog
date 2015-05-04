---
title: "Apprendre à se servir de ce qu'on a : manipuler le DOM"
author: Cyrille Jesmo Drazik
date: 2015-03-21
template: article.jade
---

L'une des fonctionnalités majeures des jQuery-like est la manipulation du DOM. Voyons comment faire pour manipuler le DOM sans utiliser de bibliothèque.

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

Pourtant, les navigateurs proposent une API pour faire la même chose : [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector?redirectlocale=en-US&redirectslug=DOM%2FDocument.querySelector) et [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll?redirectlocale=en-US&redirectslug=DOM%2FDocument.querySelectorAll). `querySelector` renvoie le premier élément trouvé ou `null`. `querySelectorAll` renvoie une `NodeList` contenant tous les éléments trouvés (donc vide si aucun élément n'est trouvé). Voici donc comment faire la même chose que le code précédent, avec cette API :

```javascript
var element = document.querySelector('#element');
var buttons = document.querySelectorAll('button');
```

Il y a deux subtilités. La première, c'est cette `NodeList` renvoyée par `querySelectorAll`. On s'attendrait plutôt à obtenir un `Array`. En effet, `NodeList` n'expose pas toutes les méthodes pratiques qu'`Array` expose, et dont vous trouverez une liste [par ici](http://es5.github.io/#x15.4.4) (on s'arrête à EcmaScript 5 car nous ciblons IE8, mais si vous voulez utiliser des méthodes introduites avec EcmaScript 2015 - le nom officiel d'EcmaScript 6 -, vous pouvez chercher des polyfills). Pour des raisons de praticité, il vaut donc mieux transformer cette `NodeList` en `Array`. On va donc se recréer une fonction `$` qui fait ça.

```javascript
function $(selector) {
    var elements = document.querySelectorAll(selector);

    return Array.apply(null, elements);
}
```

La seconde, c'est que IE8 ne connait pas les sélecteurs CSS 3. Il n'est donc pas possible de les utiliser avec `querySelector` et `querySelectorAll`, ce qui peut être handicapant dans certains cas, mais il est souvent possible de se débrouiller sans. [Voici la liste des sélecteurs supportés par IE8](http://www.w3.org/TR/CSS2/selector.html) (ce sont les sélecteurs CSS 2.1, quoi).


## Créer des éléments

Pour créer des éléments, c'est très simple. Là où on ferait un `$('<div />')` avec jQuery ou un `new Element('div')` avec MooTools, en JavaScript natif, il suffit de faire ceci :

```javascript
var div = document.createElement('div');
```

Il existe aussi une méthode de `document` permettant de créer un noeud texte, que l'on pourra par la suite ajouter à notre div précédemment créée :

```javascript
var text = document.createTextNode('Le futur contenu de ma div !');
```

* [Documentation de `document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [Documentation de `documentation.createTextNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)

## Insérer des bouts de DOM

Reprenons nos deux noeuds précédents. Imaginons qu'on veuille donc insérer le texte dans la div, puis la div dans le `body`. Pour ça, il suffit de faire ceci :

```javascript
div.appendChild(text);
document.body.appendChild(div);
```

C'est exactement la même chose qu'avec un jQuery-like, sauf que c'est natif.

Ca fonctionne très bien pour ajouter un ou deux éléments, mais pour ajouter de gros bouts de DOM, il est conseillé d'utiliser `document.createDocumentFragment()`. En effet, l'API DOM des navigateurs est extrêmement lente. Par conséquent, faire plusieurs petites insertions est moins performant qu'une seule grosse insertion. En utilisant `document.createDocumentFragment()`, on crée un `DocumentFragment` (merci Captain Obvious) dans lequel on va faire toutes nos petites insertions, puis on va finir par insérer tout le résultat, en une seule fois, dans le DOM. Imaginons qu'on veuille créer une liste non ordonnée d'éléments se trouvant dans un tableau (pourquoi pas) :

```javascript
var elements = ['Pommes', 'Poires', 'Carottes', 'Tomates'];
var fragment = document.createDocumentFragment();
var title = document.createElement('h1');
var list = document.createElement('ul');
title.innerHTML = 'Ma liste de trucs à acheter';
fragment.appendChild(title);

elements.forEach(function(element) {
    var listItem = document.createElement('li');
    listItem.innerHTML = element;

    list.appendChild(listItem);
});

fragment.appendChild(list);

document.body.appendChild(fragment);
```

Et voilà, on construit petit à petit notre DOM. Une fois terminé, on l'insère en une seule traite. L'exemple précédent est très simple, et pourtant le gain en performance est déjà notable, comme en atteste [ce jsPerf](http://jsperf.com/documentfragment-speed-test).

Il est aussi possible de prepend un élément, c'est à dire non pas l'ajouter à la fin des fils d'un noeud, mais avant l'un d'entre eux. Imaginons qu'on veuille ajouter un élément au tout début de notre liste précédente, on aurait donc besoin de 3 choses : la liste, l'élément avant lequel on souhaite ajouter un nouvel élément, et le nouvel élément. Ce qui donne ceci :

```javascript
var list = document.querySelector('ul');
var firstItem = list.querySelector('li');
var newItem = document.createElement('li');
newItem.innerHTML = 'Courgettes';

list.insertBefore(newItem, firstItem);
```

Si `firstItem` vaut `null`, le comportement est équivalent à `appendChild`, ce qui permet d'insérer un élément avant un autre élément, ou à la fin du parent dans le cas où l'autre élément n'existe pas.

* [Documentation de `Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
* [Documentation de `Document.createDocumentFragment()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)
* [Documentation de `Node.insertBefore()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)

## Cloner un élement

Enfin, il est possible de cloner un élément existant dans le DOM. Pour cela il suffit d'utiliser la méthode [`Node.cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode), comme ceci :

```javascript
var title = document.querySelector('h1');
var clonedTitle = title.cloneNode(true);
```
Le paramètre qu'on passe à `cloneNode` sert à dire si on veut que les fils du `Node` soient aussi clonés ou non. Ici, je veux que le texte que contient mon `h1` soit aussi cloné, donc je passe `true`. Le noeud cloné n'est pas directement inséré dans le DOM. On a sa référence dans `clonedTitle`, ce qui nous permet de l'insérer où on veut en utilisant les méthodes vues précédemment.

## Supprimer un élément

On sait sélectionner des éléments, en ajouter, en cloner. Il ne reste plus qu'à savoir comment en supprimer. Et pour ça, il faut utiliser la méthode [`Node.removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild). Supprimons le premier élément de notre liste :

```javascripts
var list = document.querySelector('ul');
var firstItem = list.querySelector('li');

list.removeChild(firstItem);
```

Voilà. La majorité des besoins les plus courants en termes de manipulation du DOM sont couverts par les API de base des navigateurs. Il y a beaucoup d'autres méthodes à notre disposition. La documentation du MDN est très complète, n'hésitez pas à la parcourir.
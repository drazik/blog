---
title: "Apprendre à se servir de ce qu'on a : la délégation d'événements"
date: "2015-07-04"
timeSensitive: true
---

La délégation d'événements est un concept très fréquemment utilisé et
extrêmement utile. Plutôt que d'attacher un événement à chaque élément enfant
d'un autre élément, pourquoi ne pas en attacher un uniquement à l'élément
parent, et se servir de la phase de bubbling pour identifier l'élément qui a
déclenché l'événement ? jQuery et ses petits copains gèrent ça très bien (le
fameux 2ème paramètre de `jQuery.on`). Voyons comment faire la même chose en se
passant de leurs services.

<span class="more"></span>

_Cet article est le cinquième de la série ["apprendre à se servir de ce qu'on
a"](/articles/apprendre-a-se-servir-de-ce-quon-a), ayant pour objectif de
montrer que l'utilisation d'une bibliothèque telle que jQuery n'a pas toujours
de sens. N'hésitez pas à parcourir les autres articles !_

## Pourquoi faire ça ?

Tout d'abord, cette technique améliore les performances. Au lieu d'attacher 100
événements à mes 100 `<li>` qui composent mon `<ul>`, je n'en attache qu'un
seul sur le `<ul>`. Mais un autre avantage non négligeable est qu'elle permet
de ne pas se soucier de l'ajout ni de la suppression d'éléments au sein de
l'élément auquel l'événement est attaché. En effet, en attachant un événément à
chaque `<li>`, il faudrait, lorsque j'en supprime un, d'abord supprimer
l'événement qui lui est attaché. De même si j'ajoute un `<li>`, il faudrait que
je m'occupe de lui attacher un événement, puisque celui-ci ne peut pas deviner
qu'il doit réagir comme les autres à l'événement `click`, par exemple. Or en
attachant un événement uniquement au `<ul>`, celui-ci recevra l'événement click
en provenance des `<li>`. Bien évidemment, ce n'est pas magique. Si la fonction
de callback attachée au `<ul>` se déclenche uniquement lorsqu'on intéragit avec
un `<li>`, c'est parce qu'on lui a dit. Ceci est possible grâce à la phase de
bubbling que traverse un événement, et qui est très bien expliquée chez
[Alsacréations](http://www.alsacreations.com/article/lire/578-La-gestion-des-evenements-en-JavaScript.html).

Voyons voir comment faire ceci avec nos petites main.

## La délégation d'événement sans bibliothèque aucune !

Alors, qu'est-ce qu'il nous faut ? D'abord un DOM, évidemment, et un event
listener. On va changer d'exemple et créer une `<div>` contenant des
`<button>`. Lorsqu'on cliquera sur un `<button>`, on affichera le texte qu'il
contient.

```html
<div id="container">
    <button type="button">Je suis le 1er bouton</button>
    <button type="button">Je suis le 2eme bouton</button>
    <button type="button">Je suis le 3eme bouton</button>
</div>
```

Il faut maintenant qu'on attache un événement `click` à notre `div#container`.
Celui-ci devra regarder si l'élément ayant déclenché l'événement est un
`<button>`, et si c'est le cas, afficher le texte contenu par celui-ci dans la
console. Pour IE 8, on utilisera un polyfill de
[`EventTarget.addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?redirectlocale=en-US&redirectslug=DOM%2FEventTarget.addEventListener).

```javascript
var container = document.getElementById('container');

container.addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'BUTTON') {
        console.log(event.target.textContent);
    }
});
```

Cette façon de faire fonctionne. Mais est très spécifique et va vite devenir
trop complexe. On va donc décomposer son fonctionnement pour essayer de créer
une fonction générique. Notre fonction précédente regarde si `event.target` est
bien un `<button>`. Pour généraliser, il faudrait qu'on puisse savoir si
`event.target` correspond à un sélecteur CSS donné. Puis, si l'élément
correspond au sélecteur qui nous interresse, on exécute la fonction voulue.

On a donc besoin d'une fonction permettant de savoir si un élément correspond à
un sélecteur CSS ou non. Pour cela, il existe la méthode
[`Element.matches`](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches).
Celle-ci est disponible sur tous les navigateurs récents, ainsi que sur IE 9+
(avec préfixe, en ateste [caniuse](http://caniuse.com/#feat=matchesselector)).
Pour IE8, le MDN fournit un polyfill utilisant `document.querySelectorAll`.
Celui-ci ne sera donc utilisable qu'avec des [sélecteurs CSS
2.1](http://www.w3.org/TR/CSS2/selector.html), ce qui devrait être largement
suffisant pour une grande majorité des cas.

On a donc tout ce qu'il faut pour créer notre fonction `delegate` !

```javascript
// Notre fonction a besoin :
// - de l'élément sur lequel écouter l'événement
// - du type d'événement à écouter
// - du sélecteur auquel les éléments doivent correspondre pour lancer le callback
// - le callback à lancer
function delegate(element, eventType, selector, callback) {
  // on écoute l'événement sur l'élément parent
  element.addEventListener(eventType, function(event) {
    // si event.target correspond au sélecteur voulu...
    if (event.target && event.target.matches(selector)) {
      // ... on exécute le callback
      callback(event);
    }
  });
}
```

C'est aussi simple que ça. Il n'y a plus qu'à mettre tout ça dans un petit
module Node.js et de le `require` pour ne pas polluer le scope global, et le
tour est joué.

Pour tester cette fonction, vous pouvez regarder le Codepen ci-dessous
(n'oubliez pas d'ouvrir votre console pour voir les `console.log`) :

<p data-height="268" data-theme-id="15557" data-slug-hash="GJQVYO" data-default-tab="result" data-user="JesmoDrazik" class='codepen'>See the Pen <a href='http://codepen.io/JesmoDrazik/pen/GJQVYO/'>Event delegation</a> by Cyrille Perois (<a href='http://codepen.io/JesmoDrazik'>@JesmoDrazik</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Une bibliothèque spécialisée

Il existe tout de même des bibliothèques spécialisées dans la délégation
d'événements. Ma préférée est
[FTDomDelegate](https://github.com/ftlabs/ftdomdelegate/blob/master/lib/delegate.js).
Celle-ci couvre absolument tous les cas que vous pouvez rencontrer, et est
compatible jusqu'à IE 8, à condition d'utiliser un polyfill pour
`addEventListener`, ce qui était de toutes façons nécessaire pour notre
solution précédente. L'API de cette bibliothèque est simple et le tout
fonctionne très bien. De plus, elle est disponible sur npm. Que du bonheur.

Voilà, nous avons donc vu qu'une fonction de quelques lignes peut permettre de
faire de la délégation d'événement efficace et simple. Si vous préférez
utiliser une bibliothèque spécialisée, testée et éprouvée, alors je vous
conseille d'aller voir du côté de FTDomDelegate.

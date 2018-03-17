---
title: "Faire des carrés"
date: "2016-08-03"
timeSensitive: true
---

Quoi de plus simple qu'un carré ? Pourtant, comment dire à un élément HTML que
sa hauteur doit être égale à sa largeur ?

## La méthode "tout en dur"

C'est la méthode qui est la plus simple et la plus inutile en même temps :

<p data-height="300" data-theme-id="15557" data-slug-hash="dXjrGm" data-default-tab="html,result" data-user="JesmoDrazik" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/JesmoDrazik/pen/dXjrGm/">Fixed width and height square</a> by Cyrille Perois (<a href="http://codepen.io/JesmoDrazik">@JesmoDrazik</a>) on <a href="http://codepen.io">CodePen</a>.</p>

Alors oui, ça fait un carré, c'est indéniable. Pourtant, rare sont les cas dans
lesquels ont peut se permettre de donner une taille fixe à un élément
aujourd'hui. On a plus souvent besoin que l'élément soit un carré, et le reste
même quand celui-ci est redimensionné.

Mais il n'existe pas de moyen simple et évident en CSS pour donner à un élément
une hauteur égale à sa largeur à tout moment. Quelque chose comme ceci... :

```css
.Square {
  display: block;
  width: 25%;
  height: computed-property(width);
}
```

... qui prendrait la valeur calculée de `width` pour l'appliquer à `height`. Il
nous faut donc une solution pour "écouter" la largeur de notre élément afin d'y
appliquer une hauteur égale.

## La méthode JavaScript

La solution qui vient immédiatement en tête est d'utiliser du JS pour écouter
l'événement `resize` sur la `window`, lire la `width` de l'élément et
l'appliquer à sa `height` :

<p data-height="300" data-theme-id="15557" data-slug-hash="mEjPPQ" data-default-tab="js,result" data-user="JesmoDrazik" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/JesmoDrazik/pen/mEjPPQ/">Squares using JavaScript</a> by Cyrille Perois (<a href="http://codepen.io/JesmoDrazik">@JesmoDrazik</a>) on <a href="http://codepen.io">CodePen</a>.</p>

(il serait évidemment une bonne idée d'utiliser un
[`debounce`](https://lodash.com/docs#debounce) pour ne pas lancer la fonction
un trop grand nombre de fois, mais le but est de rester simple ici)

Cette solution fonctionne, mais le fait que mes éléments soient carrés devrait
être laissé à la responsabilité de CSS. En effet, mon JS peut être bloqué par
n'importe quel traitement, erreur, voir même être désactivé par l'utilisateur
(c'est rare mais ça existe). Une solution CSS only serait préférable.

## La méthode "je connais CSS"

En me baladant sur un site en cours de développement chez Wandi, j'ai remarqué
que des éléments d'une page étaient carrés, et le restaient lorsqu'on
redimensionne la fenêtre du navigateur. Je suis allé voir le JS associé, pour
m'assurer qu'un `debounce` était appliqué, afin d'optimiser les performances.
A ma grande surprise, aucun JS n'était de la partie, tout était fait en CSS.
J'ai donc demandé au collègue qui s'est chargé du développement de ce composant
sa petite astuce. Et celle-ci repose sur le simple fait suivant : lorsqu'on
applique une valeur en pourcentage à un padding, celle-ci se base sur la
largeur de l'élément englobant.

Il existe donc bien un moyen de donner à un élément une hauteur égale à sa
largeur, et ce de manière fluide : appliquer un `padding-bottom: 100%` à un
pseudo-élément.

<p data-height="300" data-theme-id="15557" data-slug-hash="GqBoGd" data-default-tab="css,result" data-user="JesmoDrazik" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/JesmoDrazik/pen/GqBoGd/">CSS only square</a> by Cyrille Perois (<a href="http://codepen.io/JesmoDrazik">@JesmoDrazik</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Et voici. Je tire trois enseignements de cette expérience :

* Comment faire des carrés en CSS !
* Lire la documentation, comme toujours, est primordial
* Le partage de connaissances, lui aussi, est primordial. Je remercie donc ce
  collègue (qui est apprenti, vous avez des choses à apprendre de vos apprentis)
  d'avoir partagé ceci avec moi

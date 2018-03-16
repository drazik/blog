---
title: "Veille de la semaine - 29/07/2016"
date: "2016-07-29"
---

Cette semaine une mixin Sass pour émuler un `(min|max-font-size)`, un nouvel
outil dévoilé par Facebook pour démarrer un projet React, un nouveau livre de
la collection A Book Apart sur SVG, des plugins pour Atom et bien d'autres
choses.

## Atom

[Awesome Atom](https://github.com/mehcode/awesome-atom) : une sélection de
plugins Atom bien pratiques.

## CSS

[CSSLint + Stylelint](https://github.com/CSSLint/csslint/issues/668) : CSSLint
va merger avec Stylelint, et ils ont besoin d'aide pour ça.

[Viewport Sized Typography with Minimum and Maximum
Sizes](https://css-tricks.com/snippets/sass/viewport-sized-typography-minimum-maximum-sizes/)
: Eduardo Bouças nous offre sa mixin Sass pour pouvoir déclarer une `font-size`
avec des unités de viewport (`vw`, `vh`, `vmax` et `vmin`) tout en spécifiant
une taille minimum et maximum.

[Learning to COPE with
Microservices](https://css-tricks.com/learning-cope-microservices/) : un retour
d'expérience d'Eduardo Bouças (encore lui !) sur le développement d'un système
COPE (Create Once, Publish Everywhere) en mettant en place une couche d'API et
des microservices sur un CMS.

## JS

[create-react-app](https://github.com/facebookincubator/create-react-app) : un
utilitaire développé par Facebook (donc officiel) qui permet de créer des
applications React sans avoir à s'occuper de la mise en place de toutes les
dépendances à la main (Webpack, Babel, les presets/loaders qui vont avec...)

[Getting Started with
Async/Await](https://medium.com/@xjamundx/getting-started-with-async-await-b66385983875#.1r8qaxstz)
: une introduction aux fonctions asynchrones et au mot clef `await` en JS.

[Finally, Professional Frontend Dev with ReactJS, WebPack &
Symfony](http://fr.slideshare.net/weaverryan/finally-professional-frontend-dev-with-reactjs-webpack-symfony-symfony-cat-2016)
: un talk donné lors de la Symfony Cat 2016 à propos de la mise en place de
React et de Webpack dans un environnement Symfony.

[Micromustache](https://github.com/userpixel/micromustache) : la bibliothèque
de templating [Mustache](https://github.com/janl/mustache.js) allégée de
quelques fonctionnalités pour proposer l'essentiel (object + template = HTML)
avec des performances accrues.

## Performances

[The performance benefits of
rel=noopener](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/)
: un topo sur les bienfaits de l'utilisation de  `rel="noopener"` sur les liens
externes.

## Programmation fonctionnelle [Goodbye, Object Oriented
Programming](https://medium.com/@cscalfani/goodbye-object-oriented-programming-a59cda4c0e53#.5fne8z4l1)
: Une réflexion sur les mauvais aspects de la POO, et comment les éviter grâce
à la programmation fonctionnelle.

## SVG

[Practical SVG](https://abookapart.com/products/practical-svg) : écrit par
Chris Coyier (CSS-tricks), ce livre de la collection A Book Apart explique
comment se servir de SVG au jour le jour, mais aussi comment créer un système
d'icônes ou encore comment faire des animations.

---
title: "Apprendre à se servir de ce qu'on a : faire des animations"
author: Cyrille Jesmo Drazik
date: 2015-05-30
template: article.jade
---

Les sites web sont aujourd'hui remplis d'animations en tout genre. Elles permettent d'enrichir l'expérience utilisateur, de rendre une interface plus vivante, plus naturelle ou de faire un effet "waouh" qui fera que le site restera dans l'esprit de l'utilisateur. Bref, faire des animations, c'est aujourd'hui monnaie courante. Et ce cher jQuery et sa bande de copains nous permettent de faire ça très facilement. Mais à nouveau : et si on essayait de s'en passer ?

_Cet article est le quatrième de la série ["apprendre à se servir de ce qu'on a"](/articles/apprendre-a-se-servir-de-ce-quon-a), ayant pour objectif de montrer que l'utilisation d'une bibliothèque telle que jQuery n'a pas toujours de sens. N'hésitez pas à parcourir les autres articles !_

## Oubliez JavaScript, faites des animations CSS

La toute première chose que je souhaitais évoquer dans cet article, c'est de privilégier les animations réalisées en CSS. La raison est simple : les animations CSS peuvent bénéficier d'optimisations faites par les navigateurs (souvent apparentées à de l'accélération matérielle sans en être réellement), pas celles réalisées en JavaScript. Vous pouvez trouver un article sur ce sujet chez [Alsacréations](http://www.alsacreations.com/astuce/lire/1565-acceleration-materielle-au-service-de-vos-animations-css.html). Les animations CSS sont moins compatibles (voir les tables caniuse de [`transition`](http://caniuse.com/#feat=css-transitions) et [`animation`](http://caniuse.com/#feat=css-animation)) que leurs cousines en JavaScript, mais sont la plupart du temps plus efficaces et agréables (du fait des fameuses optimisations). De plus, animer un élément au déclenchement d'un événement devient aussi simple que [lui attribuer ou lui retirer une classe](/articles/apprendre-a-se-servir-de-ce-quon-a-manipuler-styles-elements/), comme vous pouvez le voir ci-dessous :

<p data-height="268" data-theme-id="15557" data-slug-hash="wagdmZ" data-default-tab="result" data-user="JesmoDrazik" class='codepen'>See the Pen <a href='http://codepen.io/JesmoDrazik/pen/wagdmZ/'>CSS animations</a> by Cyrille Perois (<a href='http://codepen.io/JesmoDrazik'>@JesmoDrazik</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Arrivés ici, ceux qui veulent faire de superbes animations sur des navigateurs qui ne supportent pas `transition` et / ou `animation` se posent toujours LA question : comment faire des animations en JavaScript ? Désolé de vous décevoir, mais cette fois-ci on ne va pas faire uniquemenent avec "ce qu'on a". En effet, à moins que toutes vos animations soient extrêmement simplistes (passer une opacité de 0 à 1, animer une couleur, une taille, une position) et linéaires, faire des animations est [une vraie galère](http://javascript.info/tutorial/animation). On va donc plutôt se pencher sur une alternative aux jQuery-like, spécialisée dans les animations. Ce que je veux, c'est une bibliothèque légère, performante, compatible avec de vieux navigateurs (comme d'habitude, je vise au minimum IE8), pérenne et simple d'utilisation. Il y a au moins une bibliothèque qui remplit tous ces critères.

## GreenSock Animation Platform (GSAP)

[GSAP](http://greensock.com/gsap) est une bibliothèque permettant de faire des animations, le café et la vaiselle. C'est très simple : peu importe l'animation que vous souhaitez faire, elle est réalisable. En tant que tel, GSAP est assez lourd (toute proportion gardée, la version la plus lourde de GSAP pèse 105Ko, contre 93Ko pour jQuery). Mais l'un de ses nombreux avantages est d'adopter une architecture basée sur des plugins. Il est donc possible d'adapter le poids de la bibliothèque en ne chargeant que ce dont on a besoin. Pour résumer, voici comment se compose GSAP :

* TweenLite : la librairie de base. Toutes les fonctions couvrant la majorité des cas d'utilisation sont présentes. `TweenLite.to` permet d'animer un élément de son état actuel à un autre spécifié en paramètre; `TweenLite.from` permet d'animer un élément d'un état spécifié en paramètre à son état actuel. De très nombreuses "timing functions" sont disponibles.
* TweenMax : extension de TweenLite embarquant des fonctions supplémentaires ainsi que des plugins comme CSSPlugin, d'autres timing functions ainsi que TimelineLite et TimelineMax.
* TimelineLite : permet de définir des séquences d'animations et de les jouer dans tous les sens, les arrêter, les reprendre, les recommencer...
* TimelineMax : exactement comme TweenMax pour TweenLite, mais pour TimelineLite.
* Des plugins : qu'on peut trouver [ici](https://greensock.com/plugins/), qui font des tas de choses... Je vous laisse regarder.

On commencera donc généralement par importer TweenLite, puis les plugins dont on a besoin, et on remplacera le tout par TweenMax si on en arrive à avoir besoin de tout.

L'API de GSAP est très simple. Il n'y a pas besoin de se souvenir de beaucoup de fonctions pour faire des animations assez complexes. Les performances sont au rendez-vous, comme en témoigne [ce comparatif](http://greensock.com/js/speed.html). Je ne vais pas faire de démo, puisque vous en trouverez une très complète et très bien faite [sur leur site](http://greensock.com/jump-start-js).

GSAP est pour moi la référence des bibliothèques d'animation en JavaScript. "Petit" bonus : c'est compatible jusqu'à IE6. Autre "petit" bonus : c'est disponible sur [npm](https://www.npmjs.com/package/gsap), vous pourrez donc l'importer et le mettre à jour très facilement.

Il est donc très simple et avantagieux d'utiliser GSAP pour faire ses animations JavaScript. Pour les projets pour lesquels vous êtes "obligés" d'utiliser jQuery, [un plugin](http://greensock.com/jquery-gsap-plugin) surchargeant la méthode `animate` est même disponible. Toutefois, GSAP est une solution à envisager uniquement si les animations CSS ne peuvent pas être utilisées seules dans votre projet. Les plus téméraires pourront tenter d'écrire leur propre fonction d'animation... Bon courage !

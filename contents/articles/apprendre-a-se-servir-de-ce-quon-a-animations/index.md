---
title: "Apprendre à se servir de ce qu'on a : faire des animations"
author: Cyrille Jesmo Drazik
date: 2015-05-30
template: article.jade
---

Les sites web sont aujourd'hui remplis d'animations en tout genre. Elles permettent d'enrichir l'expérience utilisateur, de rendre une interface plus vivante, plus naturelle ou de faire un effet "waouh" qui fera que le site restera dans l'esprit de l'utilisateur. Bref, faire des animations, c'est aujourd'hui monnaie courante. Et ce cher jQuery et sa bande de copains nous permettent de faire ça très facilement. Mais à nouveau : et si on essayait de s'en passer ?

<span class="more"></span>

La toute première chose que je souhaitais évoquer dans cet article, c'est de privilégier les animations CSS. Certes nous allons parler uniquement d'animations réalisées avec du JavaScript. Mais je conseille de ne les utiliser qu'en dernier recours (client souhaitant avoir les mêmes animations sous IE7 que sous Chrome 42 -lol.-, ou que sais-je). La raison est simple : les animations CSS peuvent bénéficier d'optimisations faites par les navigateurs (souvent apparentées à de l'accélération matérielle sans en être réellement), pas celles réalisées en JavaScript. Vous pourrez trouver un article sur ce sujet chez [Alsacréations](http://www.alsacreations.com/astuce/lire/1565-acceleration-materielle-au-service-de-vos-animations-css.html). Les animations CSS sont moins compatibles (voir les tables caniuse de [`transition`](http://caniuse.com/#feat=css-transitions) et [`animation`](http://caniuse.com/#feat=css-animation)) que leurs cousines en JavaScript, mais sont la plupart du temps plus efficaces et agréables (du fait des fameuses optimisations). Pour ceux qui sont toujours là, on peut passer au coeur du sujet !

2eme paragraphe : faire des animations JS à la main, c'est la mort, on oublie (http://javascript.info/tutorial/animation).
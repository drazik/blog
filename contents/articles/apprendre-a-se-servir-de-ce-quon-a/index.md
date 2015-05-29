---
title: Apprendre à se servir de ce qu'on a
author: Cyrille Jesmo Drazik
date: 2015-05-03
template: article.jade
---

Très souvent, lorsqu'on développe un site ou une application web, l'utilisation d'une bibliothèque telle que jQuery ou MooTools (certes, celle-ci a, parait-il, perdu la guerre, mais je trouve que cette bibliothèque propose tout de même des choses intéressantes) s'impose. S'impose ? Et si ce n'était finalement pas si obligatoire que ça ? Si on pouvait faire la même chose qu'avec jQuery, mais sans jQuery ?

<span class="more"></span>

Que l'on soit bien d'accord. Je ne crache pas sur jQuery ni sur ses petits copains. Cette bibliothèque rend un grand service, et est de très bonne qualité. Seulement, jQuery n'a pas forcément d'intérêt pour tous vos projets web. Et c'est précisément le problème. Un jQuery-like est souvent un choix par défaut au début d'un projet. Pourtant, les API JavaScript exposées par les navigateurs suffisent à couvrir une grande variété de besoins. Cette série d'articles aura pour but de donner des solutions aux problèmes couramment rencontrés lors du développement de sites (et d'applications) web. J'évoquerais les sujets suivants :

* 1ère partie : introduction
* 2ème partie : [manipuler le DOM](/articles/apprendre-a-se-servir-de-ce-quon-a-manipuler-dom/)
* 3ème partie : [manipuler le style des éléments](/articles/apprendre-a-se-servir-de-ce-quon-a-manipuler-styles-elements/)
* 4ème partie : [faire des animations](/articles/apprendre-a-se-servir-de-ce-quon-a-animations)
* 5ème partie : la délégation d'événements
* 6ème partie : AJAX
* 7ème partie : des petites choses bien pratiques

Les liens ci-dessus seront mis à jour au fur et à mesure de la publication de chaque partie.

Je m'efforcerais de donner des solutions compatibles avec Internet Explorer 8 et plus, ainsi que les navigateurs dits "récents" (Firefox, Chrome, Safari, Opera...). Les très vieilles versions d'Internet Explorer ne sont quasiment plus utilisées et, selon moi, freinent grandement nos développements qui doivent être compatibles avec elles. Je m'épargnerais cela pour ces articles.

Parfois, les solutions passeront par la mise en place de polyfills. C'est pourquoi je tiens à présenter ce concept dans cette introduction, pour ceux qui ne sauraient pas ce que c'est. Un polyfill est un script JavaScript qui a pour but de simuler une fonctionnalité dans un navigateur qui ne la propose pas de manière native. Par exemple, IE8 ne propose pas l'objet `console`. On peut donc exécuter un script qui lui ajoutera cet objet (pour ceux que ça intéresse, il y en a un qui est disponible [sur github](https://github.com/paulmillr/console-polyfill)).

Pour trouver un polyfill, c'est très simple. Il suffit de taper dans son moteur de recherche favoris "polyfill [fonctionnalité recherchée]" (exemple: "polyfill console"). Sachez que le [Mozilla Developer Network (MDN)](https://developer.mozilla.org/fr/) propose très souvent des polyfills sur ses pages de documentation de fonctions / méthodes.

Un dernier point sur les polyfills. Il existe un service permettant de les récupérer à la demande. Je ne l'ai encore jamais utilisé, mais vous pouvez aller voir ça [par ici](https://github.com/Financial-Times/polyfill-service).

Voilà pour l'introduction de cette série d'articles.

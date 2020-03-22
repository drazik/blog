---
title: "Veille de la semaine - 18/03/2016"
date: "2016-03-18"
---

Cette semaine au programme : une très bonne introduction aux promises d'ES6,
des attributs permettant de précharger des ressources, des images responsives
et un retour d'expérience sur une refonte de site avec React.

<span class="more"></span>

[Introduction to ES6 Promises – The Four Functions You Need To Avoid Callback
Hell](http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/)
: dans cet article, l'auteur explique les bienfaits des promises et montre
comment passer petit à petit d'un code illisible à base de callback imbriqués à
un code très propre utilisant des promises. Un must read pour qui ne comprend
rien aux promises.

[querySelectorAll from an element probably doesn't do what you think it
does](https://www.lvh.io/posts/queryselectorall-from-an-element-probably-doesnt-do-what-you-think-it-does.html#)
: on pourrait croire que `querySelectorAll`, appliquée à un élément, limite la
recherche aux enfants de celui-ci, sans traverser tout le DOM. Ce n'est pas le
cas.

[Replay sur la refonte front end de 6play fr - Kenny
Dits](https://www.youtube.com/watch?v=6KUXRuNzBwM&feature=youtu.be&t=73) :
retour d'expérience de la part du responsable études et développement de M6Web
sur la refonte front-end de 6play.fr. Il y explique le cheminement qui a mené
aux choix des technos faits par son équipe, et comment ils ont pu mener à bien
ce gros projet.

[Prefetching, preloading,
prebrowsing](https://css-tricks.com/prefetching-preloading-prebrowsing/) : il
est question ici de web perf. De nouvelles valeurs de l'attribut `rel` de la
balise `<link>` nous permettent de précharger des ressources ou d'entamer une
connexion avec un serveur avant même d'en avoir besoin. Le but est d'accélérer
les temps de chargements lorsque la ressource sera effectivement demandée par
le client.

[The anatomy of responsive
images](https://jakearchibald.com/2015/anatomy-of-responsive-images/) :
excellent article, bien illustré, de Jake Archibald sur les images responsives.
Il aborde différents cas de figures pour couvrir une grande partie des cas
d'utilisation des images responsives.

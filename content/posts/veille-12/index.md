---
title: Veille de la semaine - 28/10/2016
author: Cyrille Jesmo Drazik
date: 2016-10-28
---

Une mise à jour importante de Gecko doit arriver fin 2017, une technique pour
remplacer les librairies de templating JS par des template strings introduites
par ES2015, une technique pour donner l'impression d'un chargement de page plus
rapide aux utilisateurs...

## Browsers

[A Quantum Leap for the Web](https://medium.com/mozilla-tech/a-quantum-leap-for-the-web-a3b7174b3c12#.o5t1re9u7) :
Mozilla travaille sur une refonte de son moteur Gecko. Leur but est de tirer un
maximum profit des architectures matérielles modernes (notamment les nombreux
coeurs des processeurs) afin d'augmenter significativement les performances du
moteur. Un projet qui devrait voir le jour dans Firefox fin 2017.

## CSS

[HSL: The RGB You've Been Waiting For](https://www.youtube.com/watch?v=eIUCPpWBrIU) :
La vidéo du talk de Visnu Pitiyanuvath lors de la JSConf Iceland 2016 dans
lequel celui-ci explique que le format RGB n'est pas fait pour les humains,
contrairement au HSL qui est plus simple à conceptualiser et à manipuler.

[Improving Perceived Performance with Multiple Background Images](http://csswizardry.com/2016/10/improving-perceived-performance-with-multiple-background-images/) :
Une technique relativement simple pour donner à l'utilisateur l'impression
qu'une page se charge plus rapidement en remplaçant les images par des dégradés
sur les couleurs principales de celles-ci pendant leur chargement.

[Continue Normalising Your CSS](http://csswizardry.com/2016/10/continue-normalising-your-css/) :
La réponse d'Harry Roberts à l'article [Normalize (CSS) no more](http://shaunrashid.com/2015/09/15/normalize-css-no-more/).
Son point de vue est que, contrairement à ce qu'on voudrait faire croire, on
n'utilise pas Normalize pour faire du pixel perfect sur tous les navigateurs et
tous les devices, mais pour se faciliter la vie en tant que développeurs. Ce qui
est un point à ne jamais négliger, tant que ça n'empiête pas sur l'expérience
de l'utilisateur.

## JavaScript

[ES6 Template Strings, the Handlebars Killer?](https://www.keithcirkel.co.uk/es6-template-strings/) :
L'utilisation des templates strings (arrivées avec ES2015) avec une approche
fonctionnelle, permettent de remplacer une librairie de templating type
Handlebars.

[What the heck is the event loop anyway ?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) :
La vidéo du talk de Philip Roberts lors de la JSConf EU 2014 à propos de ses
travaux sur l'event loop qui donne sa nature asynchrone au JavaScript. Ce talk
permet de comprendre comment JavaScript fonctionne.

[Add document.{interactive,contentLoaded,loaded} promises](Add document.{interactive,contentLoaded,loaded} promises) :
Une proposition d'API basée sur des promises pour détecter le DOM-Ready en JS.

[Teaching React Without Using React](https://medium.com/@ericclemmons/teaching-react-without-using-react-a4b87cfd4e87#.vxx8z821e) :
Une introduction à la philosophie de React et de la programmation fonctionnelle
pensée pour des développeurs PHP travaillant principalement avec WordPress. Cet
article démontre très bien que les concepts derrière React sont universels et
peuvent être utilisés en dehors de l'écosystème JS/React.

[SEO vs. React: Web Crawlers are Smarter Than You Think](https://medium.freecodecamp.com/seo-vs-react-is-it-neccessary-to-render-react-pages-in-the-backend-74ce5015c0c9#.y4ptbilhm) :
Quand on pense à une SPA, on pense souvent à une mauvaise SEO. Pourtant, cet
article montre que les moteurs de recherche sont capables d'indexer le contenu
d'une SPA aujourd'hui, tant qu'on respecte quelques règles.

---
title: "Veille de la semaine - 05/02/2016"
date: "2016-02-05"
---

Cette semaine beaucoup de Javascript. Le draft de la prochaine specification
ES2016 (ES7), la première RC d'ESLint 2.0.0 et d'autres choses !

<span class="more"></span>

[ESLint v2.0.0-rc.0
released](http://eslint.org/blog/2016/02/eslint-v2.0.0-rc.0-released) : la
prochaine version majeure d'ESLint est en Release Candidate. Cette version
apporte des nouveautés telles que la configuration automatique (en analysant
votre code actuel pour en ressortir les patterns les plus récurrents), le code
path analysis sur lequel les règles pourront s'appuyer pour mieux analyser
notre code, ou encore une meilleure gestion des différentes versions
d'ECMAScript et des variables globales associées. Une très bonne évolution qui
ne devrait plus tarder à être stable.

[Feature.js](http://featurejs.com/) : une bibliothèque de features detection
qui tient dans 1kb et qui permet de tester l'existence de 27 API.

[Draft spec ECMAScript 2016](https://tc39.github.io/ecma262/) : le draft de la
prochaine spécification d'ECMAScript, ES2016 (aussi appelée ES7). Un gros pavé
à parcourir pour avoir un aperçu des nouveautés. Ou à lire entièrement avec une
bonne aspirine pour connaître tout le détail.

[Why Everyone is Talking About Isomorphic / Universal JavaScript and Why it
Matters](http://www.capitalone.io/blog/why-is-everyone-talking-about-isomorphic-javascript/)
: on parle de plus en plus de JS isomorphique / universel, c'est à dire d'un
même code JS qu'il est possible d'exécuter à la fois côté client et côté
serveur. Les raisons sont multiples : une meilleure gestion des moteurs de
recherche, de meilleures performances au chargement, une seule base de code à
maintenir...

[How Tabs Should Work](https://24ways.org/2015/how-tabs-should-work/) : les
onglets sont des éléments d'interface relativement simples, si on s'arrête à
leur fonctionnement basique (je clique sur l'onglet, le contenu associé
s'affiche, les autres sont cachés). Pourtant, pour que ceux-ci soient
accessibles et réellement utilisables, de nombreux aspects sont à prendre en
compte : faire pointer l'URL sur l'élément affiché, initialiser correctement
l'élément affiche en fonction de l'URL, gérer le shit-click et le clic droit,
ajouter des rôles ARIA...

[Completely CSS: Custom checkboxes, radio buttons and select
boxes](http://kyusuf.com/post/completely-css-custom-checkbox-radio-buttons-and-select-boxes)
: on finit avec des composants de formulaires custom uniquement avec du CSS.
Nous savons bien qu'utiliser du JS pour arriver à ce résultat est une plaie, et
que ça ne fonctionne jamais complètement (niveau accessibilité surtout). Avec
ces techniques CSS on garde tous les comportements présents nativement, on ne
fait que modifier le style.

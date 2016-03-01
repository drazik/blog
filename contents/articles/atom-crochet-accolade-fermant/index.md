---
title: Résoudre le problème de crochet et d'accolade fermant(e) sur Atom
author: Cyrille Jesmo Drazik
date: 2016-03-01
template: article.jade
---

Lorsqu'on utilise un clavier français (mais pas que) sur Atom, l'éditeur de code
initié par Github, il est impossible de taper un crochet fermant ou une accolade
fermante. Heureusement, il existe une solution.

<span class="more"></span>

Le problème est connu depuis 2014 et est lié à la gestion de la touche "ALT GR",
comme l'indique [cette issue](https://github.com/atom/atom-keymap/issues/35).

En parcourant les commentaires, on tombe sur pas mal de solutions plus ou moins
propres qui requièrent d'éditer un fichier de configuration. J'en ai essayé
plusieurs, sans succès.

Je suis finalement tombé sur le package
[keyboard-localization](https://atom.io/packages/keyboard-localization), qui
permet de régler ces soucis sur de nombreuses dispositions de claviers, dont le
bon vieux AZERTY français. Il suffit d'installer le package, puis d'aller dans
la configuration de celui-ci et de sélectionner la langue qui vous convient
(fr_FR dans mon cas, par exemple).

Voilà. C'est certes un peu drôle d'avoir à installer un package pour avoir une
gestion correcte de son clavier, mais les développeurs d'Atom sont au courant
donc il y a de fortes chances qu'une mise à jour réglant le problème finisse par
arriver.

---
title: LessPass, pour avoir des mots de passe solides sans avoir à s'en souvenir
author: Cyrille Jesmo Drazik
date: 2016-11-21
template: article.jade
---

Pour ne pas se faire pirater un compte important (mail, réseaux sociaux...), il
faut respecter des règles bien précises pour nos mots de passe : ne pas utiliser
deux fois le même, varier les caractères, former un mot de passe assez long...
Respecter toutes ces règles et se souvenir parfaitement de tous nos mots de
passe de tête est extrêmement compliqué. LessPass permet de régler ce problème.

## Qu'est-ce que LessPass ?

[LessPass](https://lesspass.com/) est un gestionnaire de mots de passe. A ce
moment-là, vous devez vous dire qu'il en existe déjà
[des](https://www.lastpass.com/) [tas](http://keepass.info/)
[d'autres](https://www.dashlane.com/), et vous demander quel est l'intérêt d'en
créer un nouveau.

La particularité de LessPass réside dans le fait que celui-ci est basé sur une
fonction pure (c'est à dire que lorsqu'on l'invoque plusieurs fois en lui
passant les mêmes paramètres, elle renvoit toujours le même résultat), ce qui
lui permet de ne jamais avoir à stocker vos mots de passe dans une base de
données. Il n'y a donc pas de base de données qui peut être compromise, et il
n'y a pas besoin de synchroniser cette base entre vos différents devices. Le
fonctionnement interne de LessPass est très bien détaillé dans
[un article sur le blog officiel](https://blog.lesspass.com/lesspass-how-it-works-dde742dd18a4#.f4ovto7cj).

## Comment l'installer ?

LessPass propose des extensions pour [Firefox](https://addons.mozilla.org/en-US/firefox/addon/lesspass/)
et pour [Chrome](https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih),
une [application Cozy](https://github.com/lesspass/cozy), un
[outil en ligne de commande](https://github.com/lesspass/cli). Si aucune de ces
solutions ne vous convient, il reste toujours le
[site officiel](https://lesspass.com/), mais LessPass conseille d'utiliser une
solution installée en local pour des raisons de sécurité. L'outil est donc
disponible pour vous, quels que soient votre machine, OS, navigateur...

## Comment l'utiliser ?

## Pour finir

Il existe déjà de nombreux outils pour gérer ses mots de passe. Le problème est
à chaque fois que pour retrouver ses mots de passe, il faut synchroniser une
base de données en utilisant une application spécifique qui n'est pas forcément
disponible sur tous nos devices. LessPass est une nouvelle catégorie de
gestionnaire de mots de passe qui s'affranchit de toutes ces contraintes afin
d'être encore plus sécurisé et compatible que ses grand-frères. Peut-être que
dans le futur une solution plus sûre que les mots de passe sera trouvée. En
attendant, nous devons utiliser des mots de passes les plus sécurisés possibles,
avec toutes les problématiques que cela implique. LessPass me semble être un
très bon outil pour oublier nos mots de passe et leurs problématiques.

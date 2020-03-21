---
title: "LessPass, pour avoir des mots de passe solides sans avoir à s'en souvenir"
date: "2016-11-22"
---

Pour ne pas se faire pirater un compte important (mail, réseaux sociaux...), il
faut respecter des règles bien précises pour nos mots de passe : ne pas
utiliser deux fois le même, varier les caractères, former un mot de passe assez
long... Respecter toutes ces règles et se souvenir parfaitement de tous nos
mots de passe de tête est extrêmement compliqué. LessPass permet de régler ce
problème.

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
fonctionnement interne de LessPass est très bien détaillé dans [un article sur
le blog
officiel](https://blog.lesspass.com/lesspass-how-it-works-dde742dd18a4#.f4ovto7cj).

## Comment l'installer ?

LessPass propose des extensions pour
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/lesspass/) et pour
[Chrome](https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih),
une [application Cozy](https://github.com/lesspass/cozy), un [outil en ligne de
commande](https://github.com/lesspass/cli). Si aucune de ces solutions ne vous
convient, il reste toujours le [site officiel](https://lesspass.com/), mais
LessPass conseille d'utiliser une solution installée en local pour des raisons
de sécurité. L'outil est donc disponible pour vous, quels que soient votre
machine, OS, navigateur...

## Comment l'utiliser ?

Je ne parlerais ici que de l'extension Firefox, puisque c'est celle que
j'utilise. Mais le fonctionnement des autres solutions que propose LessPass est
le même.

Une fois l'extension installée, l'icône de LessPass (une clef dans un losange
bleu) s'affiche en haut à drotie de votre navigateur. Au click sur cette icône,
l'interface s'affiche :

![Interface de LessPass](/posts/lesspass/01.png)

Cette interface est très simple. Par défaut, le premier champ reprend le
domaine du site sur lequel vous vous trouvez. Le deuxième champ correspond au
login que vous utilisez sur ce site. Le troisième champ correspond à votre
master password, ou mot de passe principal. C'est le seul dont vous devrez vous
souvenir pour pouvoir retrouver tous vos autres mots de passe générés par
LessPas. Il est donc conseillé d'avoir un master password complexe.

Grâce à ces trois informations, et avec les options qui se trouvent tout en bas
de l'interface (longueur, caractères, itérations), un mot de passe est généré.
Tant que vous fournirez les mêmes entrées et les mêmes paramètres, le meme mot
de passe vous sera fournit.

![Interface de LessPass avec toutes les informations remplies](/posts/lesspass/02.png)

Il ne reste plus qu'à copier/coller le mot de passe généré dans votre
formulaire de login ou d'inscription, et le tour est joué.

## Pour finir

Lorsque je vous ai dit que LessPass n'utilisait pas de base de donnée pour
stocker vos mots de passe, je vous ai à moitié menti. Il est possible
d'utiliser une base de données. Pour cela, il faut cliquer sur l'icône qui se
trouve en haut à droite de l'interface. Vous pouvez alors créer un nouveau
compte, soit directement sur [lesspass.com](lesspass.com), soit sur une
instance auto-hébergée. Je n'ai toutefois pas encore testé cette
fonctionnalité, puisque le fonctionnement de base me convient pour le moment.

Je vous conseille donc l'utilisation de LessPass pour gérer vos mots de passe.
Celui-ci permet d'avoir des mots de passe complexes, différent sur chaque
service, et de ne pas avoir à s'en souvenir. Si vous voulez aller encore plus
loin niveau sécurité et vie privée, je vous conseille de lire l'article suivant
sur Medium : [How to encrypt your entire life in less than an
hour](https://medium.freecodecamp.com/tor-signal-and-beyond-a-law-abiding-citizens-guide-to-privacy-1a593f2104c3#.i6gyeryj1)
; ainsi que les articles [Surveillance Self-Defense](https://ssd.eff.org/fr) de
l'EFF.

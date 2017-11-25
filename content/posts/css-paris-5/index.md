---
title: CSS Paris - 5ème édition
author: Cyrille Jesmo Drazik
date: 2016-07-05
---

Hier soir, c'était la cinquième édition du meetup
[CSS Paris](http://www.meetup.com/fr-FR/CSS-Paris/events/232219450/). C'était la
première fois que j'assistais à cet événement.

<span class="more"></span>

C'est [Ekino](http://www.ekino.com/) qui a accueillit ce meetup dans ses locaux.
Merci à eux pour l'accueil !

3 talks étaient au programme :

* **10 astuces SVG qui vont vous sauver la vie** par
[@iamvdo](https://twitter.com/iamvdo) : un talk que Vincent a déjà donné lors de
la dernière [Kiwi Party](http://www.kiwiparty.fr/), dans lequel il  nous donne
10 astuces pour mieux utiliser et mieux comprendre SVG, qui est un langage
relativement vieux (à l'échelle du web) et pourtant encore assez obscur pour de
nombreuses personnes. Le format meetup lui a toutefois permis d'approfondir un
peu plus chaque astuce, puisque le temps ne lui était pas compté. Un talk très
intéressant.
* **La technique des Fab Four** par
[@HTeuMeuLeu](https://twitter.com/HTeuMeuLeu) : comment réaliser une grille
responsive dans un email sans media queries ni flexbox ? Défi relevé par Rémi et
sa fameuse
[technique des « Fab Four »](http://emails.hteumeuleu.fr/2016/02/fab-four-emails-responsive-sans-media-queries/)
qui, par un astucieux mélange de `width`, `calc()`, `min-width` et `max-width`
permet de créer des emails responsives très simplement. Un spectateur s'est
inquiété de la santé mentale de Rémi, qui a dit qu'il se portait très bien, et
aimait même ça.
* **Web Animation Performance** et **Comment faire des Layout Animations sans
faire de Layout Animation ?** par
[@HarrisFreddy](https://twitter.com/HarrisFreddy) : d'abord un rappel du
fonctionnement du moteur de rendu des navigateurs web (phases de layout, de
paint et de composite) et des impacts de la manipulation du document sur les
performances de rendu lors d'une animation, Freddy nous a parlé de la technique
FLIP (pour First Last Invert Play) pour faire des animations sur le layout de
manière performante. En gros, le principe est de partir de l'état initial, puis
de passer à l'état final sans faire d'animation, puis de revenir à l'état
initial. De cette manière, la position initiale et la position finale sont
connues, et l'animation peut se faire via un `transform`, qui ne fait entrer en
jeu que la phase composite et le GPU et est donc beaucoup plus performante
qu'une animation sur le `top`, `left` ou autre propriété de layout. Pour plus
d'informations, vous pouvez aller voir la vidéo du talk
[Web Animation Performance](https://www.youtube.com/watch?v=qrbbD-1ET14) donné
par Freddy à [Best of Web](http://bestofweb.paris/) le mois dernier.

Voilà pour ce retour sur le premier meetup auquel j'assiste. Ce fut une très
bonne expérience. Je vous conseille de
[vous y inscrire](http://www.meetup.com/fr-FR/CSS-Paris/). De nombreux autres
meetup existent, n'hésitez pas à en rejoindre plusieurs !

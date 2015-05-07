---
title: Supprimer un fichier (ou un dossier) dont le chemin est trop long
author: Cyrille Jesmo Drazik
date: 2015-03-15
template: article.jade
---

Quand on travaille avec npm sous windows, on est souvent confronté au message d'erreur suivant lorsqu'on veut supprimer un module non utilisé ou le dossier `node_modules` pour quelque raison que ce soit : "Les noms de fichiers source sont plus longs que ne le permet le système de fichiers. Choisissez un emplacement de destination avec un nom plus court, ou donnez des noms plus courts aux fichiers avant de les déplacer". Il existe un petit outil écrit en Java qui permet de passer outre cette restriction.

<span class="more"></span>

http://osmstudios.net/projects/path-too-long
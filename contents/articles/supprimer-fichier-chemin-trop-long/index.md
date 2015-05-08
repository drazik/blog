---
title: Supprimer un fichier (ou un dossier) dont le chemin est trop long
author: Cyrille Jesmo Drazik
date: 2015-05-08
template: article.jade
---

Quand on travaille avec npm sous windows, on est souvent confronté au message d'erreur suivant lorsqu'on veut supprimer un module non utilisé ou le dossier `node_modules` pour quelque raison que ce soit : "Les noms de fichiers source sont plus longs que ne le permet le système de fichiers. Choisissez un emplacement de destination avec un nom plus court, ou donnez des noms plus courts aux fichiers avant de les déplacer". Il existe un petit outil qui permet de passer outre cette restriction.

<span class="more"></span>

C'est OSMStudios qui fournit [PathTooLong](http://osmstudios.net/projects/path-too-long), écrit en Java, et qui permet tout simplement de sélectionner un dossier dont le chemin est trop long pour être supprimé par windows, et le supprimer pour de bon.

Il suffit de télécharger le fichier JAR et de l'exécuter avec un JDK 1.7 ou plus :

```
java -jar PathTooLong.jar
```

![Fenêtre principale de PathTooLong](/articles/supprimer-fichier-chemin-trop-long/images/01.jpg)

Une fenêtre s'ouvre, il ne vous reste plus qu'à sélectionner le dossier à supprimer, à confirmer la suppression et attendre plus ou moins longtemps en fonction de la taille de celui-ci. Un message de succès s'affiche une fois le dossier supprimé.

![Confirmation de suppression](/articles/supprimer-fichier-chemin-trop-long/images/02.jpg)

![Message de succès](/articles/supprimer-fichier-chemin-trop-long/images/03.jpg)

Attention, comme l'indique le message vous demandant de confirmer la suppression, celle-ci est définitive. Les fichiers ne passeront pas par la corbeille.

Pour les sceptiques, le code source est disponible sur [GitHub](https://github.com/DawsonG/PathTooLong).
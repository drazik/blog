---
title: Sublime Text, un IDE à la carte ?
author: Cyrille Jesmo Drazik
date: 2014-09-23
template: article.jade
---

Durant ma courte vie de développeur (ça fait “déjà” 4 ans pour de vrai, un peu plus pour rire), j’ai été amené à utiliser plusieurs éditeurs. J’ai commencé avec le bloc note de Windows parce que le tutoriel HTML/CSS du bon vieux Site du Zero disait que c’était suffisant même si il y avait mieux. Puis j’ai utilisé notepad++. Je développais dans mon coin et pas en pro donc ça m’a suffit pendant un bon bout de temps. Puis j’ai intégré une entreprise dans le cadre d’un contrat d’apprentissage. On m’a dit d’utiliser ce que je voulais, donc j’ai continué avec mon notepad++ (hey, c’est le truc le plus avancé que je connaissais!). Puis un jour j’ai découvert Sublime Text 2. C’était la mode, je me suis mis à l’utiliser, je l’ai trouvé plutôt cool. Puis mon maître d’apprentissage m’a suggéré d’utiliser Netbeans. Ce que j’ai fais 2/3 jours. Avant de revenir en courant vers Sublime Text. Dans mon entreprise actuelle, tout le monde utilise PhpStorm. J’ai essayé de faire comme tout le monde. Cette fois j’ai réussi presque 1 an… Avant de revenir en courant vers Sublime Text. Et ce pour plusieurs raisons.

## C'est rapide

Je clique sur l’icône dans ma barre de tâches, ça s’ouvre, je peux bosser. Je n’attends pas plusieurs minutes qu’une usine se lance et analyse tout mon projet (encore?! tu l’as fais hier, avant hier, avant avant hier, la semaine dernière… Tu perds la mémoire?!) avant de me permettre de travailler.

## J'installe uniquement ce dont j'ai besoin

Ils permettent tous de faire ça, certes. Mais ils embarquent tous la terre entière par défaut (c’est surement pour ça qu’ils mettent de nombreuses minutes à s’ouvrir). Dans Sublime Text, si j’ai besoin d’intégrer Git, j’installe le plugin qui va bien et j’ai Git intégré à mon environnement de développement, basta. Dans PhpStorm, plusieurs systèmes de gestion de versions sont intégrés par défaut. Une entreprise n’en utilise généralement qu’un, pourquoi tout embarquer par défaut ?

De plus, les plugins n’étant pas directement inclus et liés à l’éditeur, ils sont mis à jour indépendamment de celui-ci, et le merveilleux “Package Control” les met à jour automatiquement. D’autres sont obligés d’attendre qu’une nouvelle version de leur IDE préféré sorte pour une malheureuse fonctionnalité.

## Je partage très simplement ma configuration entre mes différentes machines

Quoi de plus agréable que d’avoir exactement le même environnement au travail que chez soi? Avec Sublime Text, j’initialise un repository git dans le dossier contenant les fichiers de configuration de mes différents packages, je le mets sur GitHub, je le récupère au boulot. Si je modifie ma configuration au boulot, je push sur GitHub et je récupère tout le soir en rentrant chez moi. Package Control s’occupe de récupérer les plugins que je n’ai pas sur telle ou telle machine, et même de récupérer des versions différentes en fonction du système d’exploitation si nécessaire.

## C'est gratuit

Sauf si on ne veut pas qu'une petite fenêtre apparaisse de temps en temps lorsqu'un sauvegarde un fichier. Dans ce cas c'est 70$.

Pour tout ça, selon moi, Sublime Text n’a rien a envier à Eclipse, Netbeans et *Storm. Ceci dit, le principal est d’utiliser l’outil qu’on préfère. Moi, j’ai fais mon choix :)
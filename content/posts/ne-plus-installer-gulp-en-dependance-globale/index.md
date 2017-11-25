---
title: "Ne plus installer gulp en dépendance globale"
date: "2015-03-01"
---

Avec l’arrivée de Gulp 4 (actuellement 3.8.x), qui apporte des nouveautés et cassera potentiellement la compatibilité descendante (nouvelle version majeure), je me suis penché sur le problème que pose le fait d’utiliser Gulp via une installation locale (projet, gulpfile.js) + une installation globale (système, commande gulp).

<span class="more"></span>

Si j’utilise Gulp 4 pour mes nouveaux projets pour profiter des nouveautés, alors je devrais mettre à jour mon installation globale. Sauf que par conséquent je risque de ne plus pouvoir l’utiliser sur mes projets anciens et actuels car ceux-ci seront toujours en 3.8.x. Je pourrais mettre à jour le gulp local à tous ces projets, mais ce serait galère. La meilleure solution serait d’avoir tout le temps la version globale de gulp correspondant à la version locale du projet sur lequel je bosse.

Il est très simple de régler ce problème sur les systèmes Linux / UNIX. Il suffit de créer un alias sur `./node_modules/.bin/gulp`.

Du côté de Windows, il va falloir ruser. Mais ça tombe bien, quand on installe localement un module qui a besoin d’une interface en ligne de commande, npm crée un dossier `.bin` dans le dossier `node_modules` et il met les exécutables correspondant dedans. On a donc accès à la commande `gulp` sans l’installer en global.

Pour lancer la tâche watch d’un projet, on peut faire ceci :

```
.\node_modules.bin\gulp watch
```

On peut aussi aller “plus loin” et utiliser les scripts NPM. NPM permet de définir des scripts qui peuvent être lancés en tapant :

```
npm run nom_du_script
```

Pour définir un script, il suffit d’ajouter un objet “scripts” dans le package.json. On peut donc faire ceci :

```javascript
"scripts": {
    "gulp": "./node_modules/.bin/gulp"
}
```

Dans l’état c’est cool mais ça ne fait rien, il faudrait pouvoir lui passer la tâche qu’on veut exécuter en argument, ou alors définir un script par tâche :

```javascript
"scripts": {
    "gulp:watch": "./node_modules/.bin/gulp watch",
    "gulp:compile": "./node_modules/.bin/gulp compile"
    // autres tâches…
}
```

On pourrait donc faire :

```
npm run gulp:watch
npm run gulp:compile
```

Mais le mieux serait de pouvoir utiliser le script `gulp` précédemment défini et lui passer en paramètre le nom de la tâche qu’on veut exécuter. C’est possible de faire ça, mais uniquement à partir de la version 2.0.0 de npm. Il faut donc mettre à jour notre npm si on est en 1.x.y (`npm -v` pour vérifier) :

```
npm install npm -g
```

On peut maintenant faire ceci :

```
npm run nom_du_script — arg1 arg2 "arg avec des espaces"
```

Et du coup on peut lancer une tâche gulp en spécifiant son nom comme ceci :

```
npm run gulp -- watch
```

Et si on tient absolument à avoir un script pour chaque tâche, on peut réutiliser le script “gulp” déjà écrit :

```javascript
"scripts": {
    "gulp": "./node_modules/.bin/gulp",
    "gulp:watch": "npm run gulp — watch",
    "gulp:compile": "npm run gulp — compile"
    // autres tâches…
}
```

Oh, wait ! Il y a encore plus fort. Quand on lance un script avec `npm run`, npm prend le dossier `node_modules/.bin` et le met dans le PATH. On peut donc faire encore plus court :

```javascript
"scripts": {
    "gulp:watch": "gulp watch",
    "gulp:compile": "gulp compile"
    // autres tâches…
}
```

Voilà, de cette manière, on évite d’avoir une installation globale de gulp (et donc d’avoir à la maintenir à jour), et on a l’avantage de ne pas avoir à se soucier de la version de gulp utilisée pour chacun des projets. Ceci est bien entendu (théoriquement) valable pour toutes les dépendances globales.

Il est aussi interressant de voir qu'avec ce systèmes de scripts npm, l'interêt des outils comme Gulp ou Grunt (pour ne citer qu'eux) devient limité. Des articles traitent très bien de ces sujets. Vous pouvez par exemple aller voir [celui-ci](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) de Keith Cirkel. Chacun se fera son propre avis !

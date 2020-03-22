---
title: "webpack"
date: "2017-06-28"
timeSensitive: true
---

## Qu'est-ce que webpack ?

[webpack](https://webpack.js.org/) est un _module bundler_. Il construit le
graphe de dépendances d'une application JS afin de les regrouper dans un ou
plusieurs _bundle(s)_ qui pourront être exécutés dans un navigateur web. Il
nous permet donc d'écrire du code modulaire, bien que les navigateurs
n'implémentent pour la plupart pas encore les modules ES2015. Il fait donc la
même chose que [browserify](http://browserify.org/). Toutefois, webpack est
très différent de browserify, de par sa philosophie bien particulière.

## Ici, tout est module

La philosophie de webpack est de traiter n'importe quelle dépendance d'une
application comme un module. Ainsi, un fichier JS est un module, un fichier CSS
est un module, une image est un module... Tous ces modules sont consommables
directement dans le code JS.

On peut donc faire les choses suivantes avec webpack :

```js
// Importer un module JS, classique
import add from "./add.js"

// Importer un fichier CSS
import styles from "./styles.css"

// Importer une image
import logo from "./logo.png"
```

Webpack est capable de gérer à peu près n'importe quel type de fichier, grâce à
son systême de _loaders_. À un type de fichier correspond un (ou plusieurs)
_loader(s)_, qui a pour but de dire à webpack comment faire pour charger ce
type de fichier.

## Installer webpack

Rien de plus simple, ça se fait évidemment via `npm` :

```console
npm install --save-dev webpack
```

Une fois installé, le binaire de webpack est disponible dans
`./node_modules/.bin/webpack`. Pour éviter d'avoir à taper le chemin complet à
chaque fois, on peut écrire un script npm dans notre `package.json` :

```json
"scripts": {
  "build": "webpack"
}
```

De cette manière, il suffira de taper `npm run build`, plutôt que
`./node_modules/.bin/webpack` pour lancer webpack.

_Il est aussi possible d'[installer webpack en
global](https://webpack.js.org/guides/installation/#global-installation), mais
ce n'est pas conseillé._

_Si vous voulez en savoir plus à propos des scripts npm, vous pouvez aller voir
l'article ["ne plus installer gulp en dépendance
globale"](/articles/ne-plus-installer-gulp-en-dependance-globale/), qui traite
de ce sujet._

## Configurer webpack

Pour faire fonctionner webpack, on va créer un fichier de configuration, nommé
`webpack.config.js`. Le minimum requis est un point d'entrée et un point de
sortie :

```js
const path = require("path")

module.exports = {
  // Notre fichier source
  entry: "./assets/js/app.js",
  output: {
    // le chemin vers le bundle que webpack va générer
    path: path.resolve(__dirname, "web/assets"),
    // le nom du bundle
    filename: "bundle.js",
  },
}
```

Avec cette configuration minimale, webpack est capable de gérer nos dépendances
JS. Donc, si on a la configuration suivante :

```js
// assets/js/add.js
export default const add = (a, b) => a + b;
```

```js
// assets/js/app.js
import add from "./add.js"

console.log(add(1, 2))
```

webpack générera un seul fichier, regroupant `add.js` et `app.js`, et qui une
fois importé dans une page web, affichera `3` dans la console.

_Note : webpack supporte par défaut la syntaxe des modules ES2015. Toutefois,
c'est le seul aspect de cette syntaxe qu'il transpile directement. Pour le
reste, il faut utiliser babel._

## Les loaders

webpack met à disposition une API permettant de lui dire ce qu'il doit faire
lorsqu'il charge un module : les _loaders_.

Par exemple, il est possible de lui dire "tiens, webpack, lorsque tu charges un
fichier JS, alors passe le dans babel pour récupérer le code transpilé avant de
créer ton bundle". Pour ça, il faut d'abord installer
[`babel-loader`](https://www.npmjs.com/package/babel-loader) et
[`babel-core`](https://www.npmjs.com/package/babel-core). De plus, nous allons
aussi utiliser le preset
[`env`](https://www.npmjs.com/package/babel-preset-env).

```
npm install --save-dev babel-loader babel-core babel-preset-env
```

Il faut ensuite modifier notre configuration, pour y ajouter le loader et le
configurer :

```js
const path = require("path")

module.exports = {
  entry: "./assets/js/app.js",
  output: {
    path: path.resolve(__dirname, "web/assets"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // le test se fait sur le nom des fichiers qu'on importe
        // ici, on veut que cette règle s'applique à tous les fichiers dont
        // le nom se termine par ".js"
        test: /\.js$/,
        // on demande à webpack de n'appliquer cette règle qu'aux fichiers qui
        // se trouvent dans ./assets/js. Sinon, il l'appliquerait à tous les
        // fichiers JS, mêmes ceux de node_modules par exemple
        include: path.join(__dirname, "assets", "js"),
        // si le test passe, alors on veut appliquer le babel-loader
        loader: "babel-loader",
        // on passe des options au loader. Ici, on veut utiliser le preset "env"
        options: {
          presets: ["env"],
        },
      },
    ],
  },
}
```

Lorsqu'il tombera sur un nouveau module à importer, webpack le confrontera à
toutes les règles que nous avons définies, et celles pour lesquelles le test
est satisfait lui seront appliquées.

## Importer autre chose que du JS

Le graphe de dépendance créé par webpack permet de n'ajouter au bundle que les
modules effectivements importés dans notre application. Utiliser ce mécanisme
pour d'autres types de ressources serait très intéressant. Et justement, le
système de loaders va nous permettre d'importer n'importe quel autre type de
fichier directement dans notre JS, et de le consommer comme étant un module de
notre application.

Prenons le cas d'un fichier CSS simple. Nous avons un fichier
`assets/css/app.css` contenant l'ensemble du style de notre site. Nous voulons
que webpack ajoute celui-ci à son graphe de dépendances afin qu'il fasse partie
de notre bundle final. On l'importe donc dans notre fichier `app.js` :

```js
// assets/js/app.js

import styles from "../css/app.css"
```

Puis on demande à webpack de créer notre bundle avec `npm run build`. Et on se
prend l'erreur suivante :

```console
ERROR in ./assets/css/app.css
Module parse failed: C:\Users\ASUS\workspace\article-webpack\assets\css\app.css Unexpected token (1:5)
You may need an appropriate loader to handle this file type.
```

Ce que nous explique webpack, c'est qu'il aimerait bien importer notre fichier,
mais il ne sait pas comment faire. En effet, webpack ne sait s'occuper que des
fichiers JS out of the box. On va donc se servir d'un loader, non pas pour
transformer ce qui est importé, mais pour expliquer à webpack ce qu'il doit
faire quand on lui demande de charger un fichier CSS. Ce loader, c'est le
[`css-loader`](https://www.npmjs.com/package/css-loader).

On commence par l'installer :

```console
npm install --save-dev css-loader
```

Puis on l'ajoute aux règles de notre configuration :

```js
const path = require("path")

module.exports = {
  entry: "./assets/js/app.js",
  output: {
    path: path.resolve(__dirname, "web/assets"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "assets", "js"),
        options: {
          presets: ["env"],
        },
      },
      {
        // pour les fichiers CSS...
        test: /\.css$/,
        // ...utilise le css-loader
        loader: "css-loader",
      },
    ],
  },
}
```

De cette manière, webpack sera capable d'importer un fichier CSS. Toutefois, si
on recharge notre page, on s'apperçoit rapidement que le style n'est pas
appliqué. Et c'est normal. On a dit à webpack comment importer un fichier CSS,
mais on ne lui a pas dit ce qu'il doit faire avec ce qu'il a chargé. On a donc
actuellement un fichier CSS chargé en mémoire, mais on n'en fait rien. Pour
s'en convaincre, on peut faire la chose suivante :

```js
// assets/js/app.js

import styles from "../css/app.css"

console.log(styles)
```

Après avoir relancé webpack et affiché notre page, on peut voir un objet
contenant toutes nos règles CSS s'afficher dans la console du navigateur.

On va donc avoir besoin d'un autre loader pour dire à webpack ce qu'il doit
faire avec le CSS qu'il a chargé : le
[`style-loader`](https://www.npmjs.com/package/style-loader). Ce loader va
prendre le résultat du `css-loader`, et l'injecter dans une balise `style` dans
le `head` de notre page.

On l'installe :

```console
npm install --save-dev style-loader
```

Puis on l'ajoute aux règles :

```js
const path = require("path")

module.exports = {
  entry: "./assets/js/app.js",
  output: {
    path: path.resolve(__dirname, "web/assets"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "assets", "js"),
        options: {
          presets: ["env"],
        },
      },
      {
        test: /\.css$/,
        // il est possible de chaîner plusieurs loaders. Pour ça, on passe un
        // tableau de loaders à la propriété `use`. Les loaders sont appliqués
        // les uns à la suite des autres, en partant du dernier élément du tableau
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
}
```

Après avoir relancé webpack, le style est cette fois-ci bien appliqué à la
page. Sauf si dans votre CSS vous faites appel à des images ou des fonts. Car
le `css-loader` va traiter ceux-ci comme des imports de modules, et webpack ne
saura pas comment les charger. On va donc appliquer deux dernières règles à
notre configuration : une pour charger les images, et une pour charger les
fonts. Les deux utiliseront le
[`file-loader`](https://www.npmjs.com/package/file-loader) pour simplement
copier les fichiers dans le dossier défini dans `output.path`.

À nouveau, on l'installe :

```console
npm install --save-dev file-loader
```

Et on ajoute deux règles à notre configuration :

```js
const path = require("path")

module.exports = {
  entry: "./assets/js/app.js",
  output: {
    path: path.resolve(__dirname, "web/assets"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "assets", "js"),
        options: {
          presets: ["env"],
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        loader: "file-loader",
      },
      {
        test: /\.(ttf|woff|woff2|eot)/,
        loader: "file-loader",
      },
    ],
  },
}
```

De cette manière, quand webpack croisera un de ces fichiers, il le copiera dans
le dossier `output.path` et remplacera le chemin d'origine par celui où il aura
placé le fichier.

## Le mode `watch`

Relancer webpack à chaque fois qu'on fait une modification est chronophage. On
aimerait bien que celui-ci se relance automatiquement lorsqu'on modifie un
fichier. C'est possible, en utilisant le mode `watch` de webpack. Celui-ci peut
être activé de 2 manières : via le fichier de configuration, ou via la ligne de
commande.

Pour le fichier de configuration, il suffit d'ajouter le booléen `watch: true`
à l'objet exporté :

```js
const path = require("path")

module.exports = {
  entry: "./assets/js/app.js",
  output: {
    path: path.resolve(__dirname, "web/assets"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "assets", "js"),
        options: {
          presets: ["env"],
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        loader: "file-loader",
      },
      {
        test: /\.(ttf|woff|woff2|eot)/,
        loader: "file-loader",
      },
    ],
  },
  // webpack se lancera tout le temps en mode watch
  watch: true,
}
```

Pour la ligne de commande, il faut ajouter le flag `-w`. On peut donc se faire
un script `start` qui lance webpack en mode watch :

```json
"scripts": {
  "build": "webpack",
  "start": "webpack -w"
}
```

Ainsi, en lançant `npm start` en console, webpack crée un bundle, puis attend
qu'on fasse des modifications pour se relancer automatiquement. De plus, il
utilise un cache qui lui permet de recompiler le bundle très rapidement.

Voilà pour cette introduction à webpack, sa philosophie et son concept de
_loaders_. Cet outil est capable de faire énormément d'autres choses. Je vous
conseille de jeter un oeil à la documentation qui est très bien faite. Dans les
prochains articles, on abordera des aspects plus spécifiques comme le _code
splitting_, les _plugins_, les _sourcemaps_, `webpack-dev-server` et le _hot
module replacement_. Nous verrons aussi comment webpack peut totalement
remplacer un workflow utilisant gulp (et ça vaudra aussi pour grunt,
évidemment).

---
title: "Utiliser webpack-bundle-analyzer avec create-react-app"
date: "2018-12-24"
timeSensitive: true
---

**Edit 03/11/2019** : Le flag `--stats` n'est plus supporté depuis create-react-app v3. Plus de détails sur [cette issue](https://github.com/facebook/create-react-app/issues/6904).

La méthode préconisée par la documentation de create-react-app pour analyser la
taille de son bundle est d'utiliser
[source-map-explorer](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).
Après avoir essayé cet outil, il s'avère qu'il est tout de même moins agréable
à utiliser que
[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).
Mais celui-ci s'utilise comme un plugin webpack, il faut donc utiliser la
fonction
[`eject`](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject)
de create-react-app pour pouvoir l'utiliser. Toutefois, ejecter ou forker
react-scripts pour simplement ajouter ce plugin serait dommage... Heureusement,
il est possible de l'utiliser sans ejecter, bien que ça ne soit pas vraiment
documenté.

La première étape est évidemment d'installer webpack-bundle-analyzer :

```console
npm install --save-dev webpack-bundle-analyzer
```

Ensuite, on va modifier le script `build` pour que celui-ci génère un fichier
de statistiques qui pourra ensuite être consommé par webpack-bundle-analyzer :

```json
{
  "scripts": {
    "build": "react-scripts build --stats"
  }
}
```

L'option `--stats` aura pour effet de générer le fichier `bundle-stats.json`
dans le dossier `build` lors de la génération du bundle. Cette option n'est pas
documentée, mais on peut voir son effet dans les sources du script build :
[ici](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/build.js#L65)
et
[là](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/build.js#L191-L196).

Il ne nous reste plus qu'à lancer webpack-bundle-analyzer en lui passant ce
fichier en entrée :

```json
{
  "scripts": {
    "analyze": "webpack-bundle-analyzer build/bundle-stats.json"
  }
}
```

Et lancer ce script `analyze`, après avoir fait un build :

```console
npm run build && npm run analyze
```

Et voilà :)

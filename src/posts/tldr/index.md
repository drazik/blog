---
title: "Des man pages qui vont à l'essentiel avec tldr"
date: "2019-01-09"
timeSensitive: true
---

Si vous êtes comme moi et que vous êtes incapables de vous souvenir de l'ordre
des arguments de la commande `ln` pour créer un lien symbolique, ou des options
pour créer une archive tar gzippée avec `tar`, voici l'outil qu'il vous faut :
[`tldr`](https://tldr.sh/).

`tldr` s'installe très simplement avec `npm` (mais il existe aussi [d'autres
manières](https://tldr.sh/#installation)) :

```
npm install -g tldr
```

Celui-ci s'utilise ensuite de la façon suivante :

```console
$ tldr ln

  ln

  Creates links to files and folders.

  - Create a symbolic link to a file (or folder):
    ln -s path/to/file path/to/symlink

  - Overwrite an existing symbolic to point to a different file:
    ln -sf path/to/new_file path/to/symlink

  - Create a hard link to a file:
    ln path/to/file path/to/hardlink
```

Simple, efficace. Les pages de manuel sont gérées par la communauté. Vous
pouvez donc ajouter une page de manuel pour votre commande préférée si elle
manque ou proposer des modifications sur une page existante en faisant une
[pull request sur
Github](https://github.com/tldr-pages/tldr/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc).

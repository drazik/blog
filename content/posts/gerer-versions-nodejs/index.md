---
title: "Gérer sa (ou ses) version(s) de NodeJS"
date: "2015-10-08"
---

La sortie de la version 4.0.0 de NodeJS apporte de nombreuses nouvelles
fonctionnalités, il est donc indispensable de faire la mise à jour. Sur Windows,
faire la mise à jour de NodeJS revient à désinstaller la version actuelle,
télécharger l'installeur de la nouvelle version. Sur Ubuntu, utiliser apt-get
est
[plus compliqué qu'il n'y parait](http://doc.ubuntu-fr.org/nodejs) pour gérer
son installation de NodeJS. Il fallait donc trouver une solution plus efficace.
Mon choix s'est porté sur
[Node.js Version Manager (nvm)](https://github.com/creationix/nvm).

<span class="more"></span>

_Cet article est consacré à nvm qui ne fonctionne que sur Linux. Mais des
outils au fonctionnement similaires existent pour Windows :
[nvmw](https://github.com/hakobera/nvmw) et
[nvm-windows](https://github.com/coreybutler/nvm-windows)._

## Qu'est-ce que c'est ?

nvm est un programme permettant de gérer son installation de NodeJS. Il permet
d'installer, de mettre à jour, de désinstaller NodeJS sur votre machine, via une
simple CLI. L'avantage de cette solution par rapport à une installation via
apt-get, hormis la simplicité, c'est qu'il est possible d'installer plusieurs
versions de NodeJS sur une seule machine, et de switcher de l'une à l'autre
à la volée avec une simple commande.

## Installer nvm

Pour installer nvm, il y a deux solutions :
[via un script](https://github.com/creationix/nvm#install-script) ou
[manuellement](https://github.com/creationix/nvm#manual-install). La
documentation est très claire sur ce point, rien à ajouter.

## Installer/désinstaller NodeJS

La première étape après avoir installé nvm, c'est de l'utiliser pour installer
NodeJS :

```
nvm install <version>
```

La version à installer peut être un numéro de version précis (par exemple
`0.12.7`), ou un mot-clef. `stable` installera la dernière version stable
publiée, `unstable` la dernière version publiée, même si celle-ci n'est pas
taggée comme étant stable.

Plusieurs versions peuvent être installée, en lançant plusieurs `nvm install`.

Pour désinstaller une version précédemment installée, il suffit d'utiliser la
commande `nvm uninstall <version>`.

Enfin, la commande `nvm ls` vous permet de voir quelles versions sont installées
sur votre machine. Pour obtenir la liste des versions disponibles, il faut
utiliser `nvm ls-remote`.

## Utiliser une version installée

Une fois une ou plusieurs version(s) de NodeJS installée(s), la commande
`nvm use <version>` permet d'utiliser l'une d'elles dans le shell courrant. En
effet, de base, lors de l'ouverture d'un shell, NodeJS n'est pas disponible
dans celui-ci. Il est toutefois possible de définir une version par défaut qui
sera utilisée automatiquement lors de l'ouverture d'un nouveau shell, avec la
commande suivante :

```
nvm alias default <version>
```

Il est aussi possible d'exécuter une seule commande en utilisant une version
donnée. Pour cela, il y a deux solutions. La première permet d'exécuter
directement un fichier ou une commande avec une version précise :

```
nvm run <version> <fichier>
nvm run 4.1.2 app.js
```

La seconde permet d'exécuter une commande avec la variable PATH pointant vers
la version de NodeJS spécifiée :

```
nvm exec <version> <commande>
nvm exec 4.1.2 node app.js
```

## Conclusion

nvm nous permet donc de gérer très simplement l'installation, la mise à jour et
l'utilisation de NodeJS. Un avantage majeur de cette solution est de pouvoir
installer plusieurs versions et d'en utiliser une à un moment donné. J'ai exposé
ici les fonctionnalités les plus couramment utiles. Pour les cas d'utilisation
plus rares et poussés,
[la documentation](https://github.com/creationix/nvm#node-version-manager-) est
très complète.

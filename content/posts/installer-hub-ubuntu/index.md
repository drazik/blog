---
title: "Installer hub sur Ubuntu"
date: "2018-05-25"
timeSensitive: true
---

[hub](https://hub.github.com/) est un outil en ligne de commande qui augmente
les fonctionnalités de git pour pouvoir travailler plus simplement avec Github
directement depuis votre terminal. Il permet par exemple de faire ceci
(exemples tirés du site officiel)&nbsp;:

```console
# Cloner votre propre projet
$ hub clone dotfiles
→ git clone git://github.com/YOUR_USER/dotfiles.git

# Cloner le projet de quelqu'un d'autre
$ hub clone github/hub
→ git clone git://github.com/github/hub.git

# Ouvrir la page des issues du repository sur lequel vous travaillez
$ hub browse -- issues
→ open https://github.com/github/hub/issues

# Forker un repository
$ hub fork
→ (forking repo on GitHub...)
→ git remote add YOUR_USER git://github.com/YOUR_USER/hub.git
```

C'est un outil très pratique pour faire toutes sortes de tâches permises par
Github, sans quitter son terminal.

La documentation indique comment l'installer sur
[macOS](https://github.com/github/hub#homebrew),
[Windows](https://github.com/github/hub#windows) et
[Fedora](https://github.com/github/hub#fedora-linux). Pour les autres
plateformes, il est indiqué de [récupérer les binaires ou des les compiler à la
main](https://github.com/github/hub#standalone).

[Une issue](https://github.com/github/hub/issues/718) est ouverte depuis fin
2014 pour que des packages Debian et Ubuntu soient proposés. Cela ne semble pas
être dans les plans des mainteneurs de proposer cela, mais [un gentil
contributeur a créé un
ppa](https://github.com/github/hub/issues/718#issuecomment-100411835). Celui-ci
semble être mis à jour correctement puisqu'il propose aujourd'hui la dernière
version de hub. Voici donc la marche à suivre pour installer hub sur Ubuntu :

```console
sudo add-apt-repository ppa:cpick/hub
sudo apt-get update
sudo apt-get install hub
```

Pour vérifier que l'installation s'est bien passée :

```console
$ hub --version
git version 2.17.0
hub version 2.2.9
```

En bonus, puisque hub est un wrapper autour de git, il est conseillé d'en faire
un alias pour qu'il remplace git. Ainsi, son utilisation devient transparente.

```console
alias git=hub
```

Vous pouvez maintenant faire un `git fork`, comme si c'était une commande de
git.

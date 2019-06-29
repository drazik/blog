---
title: "git push --force-with-lease"
date: "2019-06-29"
---

La plupart du temps, pour écraser des modifications et les perdre à tout jamais
suite à l'exécution d'une commande git, il faut vraiment le vouloir : git est
fait pour nous éviter de perdre notre travail. Il est toutefois possible de
pousser ses propres modifications en écrasant totalement l'historique du repo
distant avec `git push --force`. As-tu déjà fais un `rebase` suivi d'un `push --force`, puis réalisé que tu avais écrasé le boulot qu'un collègue venait de
pousser pendant ce temps ? Sèche tes larmes, voici `git push --force-with-lease`.

Cette option permet de vérifier l'état du repo distant avant d'envoyer un tank
pour écraser son historique. Plus précisément, git vérifie que l'état de la
branche distante est le même que celui qu'on a en local. Si c'est le cas, alors
le force push est accepté, sinon il échoue, nous indiquant que la branche
distante a été modifiée et qu'on risque d'écraser le boulot du collègue si on
force push.

> C'est trop bien, je veux que ce soit le comportement par défaut, pour ne plus
> jamais écraser bêtement le travail des autres

Belle idée. Malheureusement il n'y a pas de configuration permettant d'avoir ce
comportement par défaut pour chaque `git push --force`. Le plus efficace est
donc de ne plus utiliser `push --force` et de se faire un alias `git pushf` (ou
autre nom que tu préfères) :

```console
$ git config --global alias.pushf "push --force-with-lease"
```

Tu peux maintenant faire un `git pushf` en toute sérénité.

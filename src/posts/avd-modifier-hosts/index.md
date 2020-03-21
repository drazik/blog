---
title: "Modifier le fichier hosts d'une machine virtuelle Android"
date: "2018-03-23"
---

Quand on veut tester un site web ou une app mobile sur un émulateur Android,
cela peut vite tourner à l'aventure. Le problème ? L'application doit pouvoir
communiquer avec l'API qui est lancée sur notre machine hôte, sur le domaine
`api.dev.local`. La solution ? La même que sur la machine hôte : modifier le
fichier `hosts` afin d'y ajouter ce domaine.

La plupart des réponses qu'on trouve sur le web nous suggèrent de faire un `adb pull` pour récupérer le fichier du device, de le modifier, puis de faire un
`adb push` pour le pousser sur le device. Mais ce n'est pas si simple dans la
réalité, et l'erreur suivante vous attend au tournant&nbsp;:

```console
failed to copy 'hosts' to '/system/etc/hosts': Read-only file system
```

Alors comment on fait pour s'en sortir, du coup&nbsp;?

## Créer un émulateur avec la bonne image système

La première chose que nous allons devoir faire, c'est rooter le device. Mais ce
n'est pas possible avec toutes les images Android : seules les images "Google
APIs" le permettent. Les images "Google Play APIs" ne sont pas rootables (en
tous cas simplement avec la commande `adb root`).

Choisissez donc une image qui correspond à ce critère, sinon vous n'arriverez
pas à votre but.

## Lancer l'émulateur avec un système de fichier «&nbsp;writable&nbsp;»

Une fois l'émulateur créé, il faut le lancer. Mais pas n'importe comment. On va
spécifier un flag qui nous permettra de rendre le système de fichier
«&nbsp;writable&nbsp;»&nbsp;. Pour cela, il faut localiser le binaire de votre
émulateur Android. Par défaut, il se trouve dans le dossier
`/home/user/Android/Sdk/emulator`.

```console
./emulator -writable-system -avd <nom de l'émulateur>
```

Pour connaître la liste des émulateurs que vous avez créé, c'est la commande
suivante&nbsp;:

```console
./emulator -list-avds
```

## Rooter l'émulateur

Pour pouvoir remonter le système de fichier en mode « writable », on doit être
root. Pour ça, il y a une commande simple&nbsp;:

```console
adb root
```

Cette commande relance le daemon adb en tant que root.

## Remonter le système de fichier en «&nbsp;writable&nbsp;»

Pareil qu'à l'étape précédente, une simple commande permet de faire ça&nbsp;:

```console
adb remount
```

Le système de fichier de l'émulateur permet maintenant l'écriture.

## Récupérer le fichier `hosts` de l'émulateur

Pour récupérer le fichier `hosts` de l'émulateur, on demande à tirer ce fichier
et à la placer quelque part sur notre machine&nbsp;:

```console
adb pull /etc/hosts hosts
```

On a maintenant sur notre machine le fichier `hosts`, et on peut y apporter les
modifications souhaitées.

## Ajouter le domaine souhaité

On souhaite lier un domaine à l'IP de notre machine hôte. Et pour ça, pas
besoin de s'ennuyer à récupérer l'IP de la machine. Non, dans un émulateur
Android, l'IP `10.0.2.2` pointe automatiquement vers la machine hôte. Vous
pouvez donc ajouter la ligne suivante au fichier `hosts`&nbsp;:

```console
10.0.2.2 api.dev.local
```

En remplaçant évidemment `api.dev.local` par le domaine souhaité.

## Pousser le nouveau fichier sur l'émulateur

Maintenant que ce fichier est à jour, il faut pousser les modifications sur
l'émulateur. Pour ça, c'est la commande suivante&nbsp;:

```console
adb push hosts /system/etc/hosts
```

Pour s'assurer que tout fonctionne, on peut faire un `ping` sur le domaine
fraichement ajouté&nbsp;:

```console
adb shell ping api.dev.local
```

Et voilà&nbsp;!

Dernière précision&nbsp;: cette modification persistera lors des prochains
démarrage de l'émulateur. Pas besoin de taper toutes ces commandes à chaque
utilisation.

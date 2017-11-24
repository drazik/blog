---
title: J'ai eu besoin d'un accès distant à mon serveur MySQL
author: Cyrille Jesmo Drazik
date: 2014-03-16
template: article.jade
---

Pour un projet universitaire (une plateforme collaborative de développement R), j’ai eu besoin d’une base de données. J’ai pas cherché midi à quatorze heures, j’ai choisi MySQL. Mais quelle fût ma surprise lorsque j'ai constaté que je ne pouvais pas m'y connecter à partir de ma machine mais uniquement à partir de celle sur laquelle MySQL tournait.

<span class="more"></span>

Bon d'abord, on va commencer par installer MySQL :

```
apt-get mysql-server
```

Il nous demande le mot de passe root. Nous voilà avec un MySQL et un utilisateur root.

Maintenant j’aimerais utiliser HeidiSQL pour gérer mes bases. Allez soyons fous, on entre l’ip de notre serveur, root et notre mot de passe dans HeidiSQL. Et là… Oh la grosse erreur ! Eh ouais, MySQL n’autorise que les connexions locales par défaut. Et ne donne des droits aux utilisateur que s’ils se connectent en local. Bon, on va changer tout ça.

On va d’abord donner tous les droits sur toutes les bases à notre utilisateur root (en vrai il faudrait ne surtout pas toucher à root, mais plutôt créer un autre utilisateur à qui on restreint les droits, etc… J’ai la flemme, on verra plus tard) :

```sql
GRANT ALL PRIVILEGES ON *.* TO ‘root’@’%’ IDENTIFIED BY ‘UnMDPSuperSecret’;
```

EDIT : un [très bon article](http://blog.emmanuelgautier.fr/utilisateurs-et-privileges-sous-mysql.html) d'Emmanuel Gautier explique comment gérer les droits sous MySQL. Je vous invite à y jetter un oeil pour gérer les droits proprement sur votre serveur.

Explications. `GRANT ALL PRIVILEGES`, ça veut dire ce que ça veut dire. `ON *.*`, ça veut dire sur toutes les bases et toutes les tables qui composent ces bases. `TO 'root'@'%'`, ça veut dire à l’utilisateur root peu importe l’IP avec laquelle il se connecte. Et `IDENTIFIED BY '...'`, c’est le mot de passe de root.

Pour que MySQL prenne ceci en compte, il faut “flusher” les privileges :

```sql
FLUSH PRIVILEGES;
```

Une fois ceci fait, on va dire à MySQL de ne plus écouter les connexions uniquement sur 127.0.0.1 :

```
vi /etc/mysql/my.cnf
```

On commente la ligne `bind-address = 127.0.0.1`.

Et on redémarre MySQL :

```
/etc/init.d/mysql restart
```

Et voilà, comme dirait l’autre.
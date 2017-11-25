---
title: Debrief des ateliers Paris Web 2017
author: Cyrille Jesmo Drazik
date: 2017-10-08
---

L'édition 2017 de [Paris Web](https://www.paris-web.fr/) a touché à sa fin hier
soir, après une journée d'ateliers à laquelle j'ai participé. Debrief.

## Le web à la poursuite des applications natives avec les Progressive Web Apps

Cet atelier a été donné par Xavier Julien et Clément Dubois d'OCTO Technology.

Les Progressive Web Apps (PWA) sont en place depuis un certain temps (fin 2015
sur Chrome et début 2016 sur Firefox, en gros). C'est un sujet que je vois
passer régulièrement dans mon feed Twitter, mais auquel je n'ai jamais eu le
temps de m'intéresser vraiment. Cet atelier m'a permis de défricher le sujet, et
de comprendre réellement ce que sont les PWA.

Ces applications ne sont pas basées sur une seule technologie, mais sur tout un
ensemble d'APIs que les navigateurs implémentent chacun à leur rythme. D'où le
nom de "progressive". Comme pour le progressive enhancement, si une API est
disponible on l'utilise, sinon on passe notre chemin en essayant de proposer à
l'utilisateur la meilleure expérience possible avec ce qu'on a à disposition.

Les Services Workers sont quand même la techno au centre des PWA. Ils sont
implémentés seulement par Firefox et Chrome actuellement, mais Microsoft et
Apple bossent sur le sujet pour les prochaines versions de Edge et Safari.

L'atelier a été l'occasion d'implémenter les features suivantes sur une app de
micro-blogging très simple :

* Installation d'un Service Worker : celui-ci agit comme un proxy entre notre
app et le reste du monde. Il s'exécute en arrière-plan, même quand notre app est
fermée
* Écriture d'un `manifest.json` : ce fichier permet de déclarer plein de choses
concernant notre app. Nom, nom court, icônes, URL de base, orientation de
l'écran à l'ouverture... Ce fichier JSON permet à notre app de "s'installer" sur
l'écran d'accueil de l'utilisateur, comme une app native
* Mise en cache des fichiers statiques de l'app ("App Shell") : cette mise en
cache permet à l'utilisateur de charger notre app même lorsqu'il n'a pas de
connexion
* Mise en cache des données dynamiques : tout comme le point précédent, cette
mise en cache a pour but de permettre à l'utilisateur d'accéder aux données
qu'il a déjà chargées, même lorsqu'il est hors connexion
* Notifications push : comme sur une app native, il est possible d'envoyer des
notifications à l'utilisateur, même lorsque l'app est fermée
* Envoi au back-end des messages postés en offline, dès qu'une connexion est
rétablie : afin de permettre à l'utilisateur d'intéragir avec l'app sans se
soucier de l'état de sa connexion. Si celui-ci envoie un message lorsqu'il n'a
pas de connexion, alors son message est enregistré dans une base locale, et
envoyé au back-end dès que sa connexion est de retour

Cet atelier a été très intéressant à suivre. Bravo et merci à Xavier et Julien.
Si le sujet vous intéresse, vous pouvez allez voir les ressources suivantes :

* [Making a Simple Site Work Offline with ServiceWorker](https://ponyfoo.com/articles/simple-offline-site-serviceworker)
* [The copy & paste guide to your first Service Worker](https://remysharp.com/2016/03/22/the-copy--paste-guide-to-your-first-service-worker)

## Webpack comme des grand·e·s !

L'atelier était donné par [Christophe Porteneuve](https://twitter.com/porteneuve)
de [Delicious Insights](https://delicious-insights.com/).

Comme toujours, Christophe a été fidèle à sa réputation : au sommet du trolling
et de la bonne humeur.

Cet atelier a été l'occasion de mettre en place une configuration webpack aux
petits oignons, capable de gérer tous les types de ressources les plus courants
(JS, CSS, Sass, Stylus, images...); prenant en compte différents environnements
(utilisation de webpack-dev-server et du Hot Module Replacement en dev,
extraction des CSS pour la prod, entre autres); écrite de manière modulaire; et
qui incorpore plusieurs tips d'optimisation (minification, vendoring, mise en
cache grâce à la mise en place de hashes dans le nom des fichiers générés...).

Les possibilités ouvertes par webpack sont tellement larges qu'il resterait
beaucoup de sujets à aborder, mais comme l'explique Christophe, l'atelier ne
durait que 3h, là où Delicious Insights propose une formation sur... 3 jours.
Aborder tout ce qui a été abordé en seulement 3 heures est déjà une belle
performance.

<blockquote class="twitter-tweet" data-lang="fr"><p lang="fr" dir="ltr">Les auditeurs en mode syndrome de Stockholm avec <a href="https://twitter.com/porteneuve?ref_src=twsrc%5Etfw">@porteneuve</a> : &quot;Vous voulez faire une pause ? NON !!!&quot; <a href="https://twitter.com/hashtag/ParisWeb?src=hash&amp;ref_src=twsrc%5Etfw">#ParisWeb</a></p>&mdash; Clément Hardoüin (@fastclemmy) <a href="https://twitter.com/fastclemmy/status/916665737040756736?ref_src=twsrc%5Etfw">7 octobre 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## À l'année prochaine

C'était ma première aux ateliers Paris Web (et même à Paris Web tout court), et
ça m'a beaucoup plu. Beaucoup d'ateliers avaient l'air intéressants, il a
fallu faire un choix. Celui-ci s'est porté sur deux ateliers très techniques.
Je compte bien y retourner pour l'édition 2018, peut-être pour des ateliers sur
des sujets qui s'éloignent un peu plus de ce dont j'ai l'habitude.

Si vous avez raté les conférences, celles-ci étaient diffusées en direct en
streaming. Vous pouvez tout rattraper [par ici](http://direct.paris-web.fr/).

Il y a aussi déjà des retours sur les conférences qui ont été publiés :
[ici](https://www.6x8.org/2017/10/mon-paris-web-2017/) et
[là](https://blog.maisonkleop.com/posts/paris-web-2017-1/). Vous pouvez aussi
voir [les derniers tweets](https://twitter.com/search?f=tweets&q=%23parisweb) du
hashtag #ParisWeb pour peut-être en trouver d'autres.

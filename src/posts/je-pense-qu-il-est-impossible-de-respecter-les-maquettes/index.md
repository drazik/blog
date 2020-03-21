---
title: "Je pense qu'il est impossible de respecter les maquettes"
date: "2014-04-16"
---

Quand on fait une intégration, on se fie à une maquette. C’est cette image
statique qu’il faut retranscrire afin qu’elle s’affiche et soit comprise par le
navigateur web.

Le problème principal est déjà posé. La maquette est statique. Alors que la
page web est dynamique. Même si son contenu ne l’est pas, la page peut être
affichée de différentes manières. Une maquette est faite dans une résolution
bien précise. La fenêtre du navigateur peut être redimensionnée à souhait. Le
problème est encore plus gros lorsqu’il y a des animations et/ou de
l’interaction au sein de la (future) page.

<span class="more"></span>

En effet, le designer a une idée. Il transpose cette idée en maquette, souvent
en utilisant Photoshop ou assimilés. Il file ensuite cette maquette à
l’intégrateur. Ici deux solutions :

- le designer et l’intégrateur peuvent discuter (sous entendu il n’y a pas 36
  intermédiaires ~~inutiles, sauf à faire grimper la facture du client final~~
  entre eux). Le designer peut dire à l’intégrateur comment il voit la page
  vivre. L’intégrateur a alors une idée de ce qu’il y a à faire, et le sujet de
  la faisabilité peut être abordé
- le designer et l’intégrateur ne peuvent pas discuter ~~(saloperies
  d’intermédiaires)~~, ou très difficilement. L’intégrateur doit donc tout
  deviner. La probabilité que ce soit exactement ce à quoi le designer avait
  pensé? Quasi nulle. Dans le meilleur des cas ça s’en rapprochera. L’intégrateur
  n’est pas dans la tête du designer. Même si nous, les gens qui faisons de
  l’informatique, [sommes d’obscurs
  magiciens](https://www.youtube.com/watch?v=BKorP55Aqvg)

Aujourd’hui, les maquettes sont de plus en plus composées d’éléments complexes.
Il y a du bord arrondis de partout, des transitions (quand le designer a pu
nous le dire, donc)… Quoi? Les bords arrondis ne sont pas des éléments
complexes? Vous dites? border-radius? Je réplique avec une compatibilité IE7+.
Alors? Les bords arrondis sont bien des éléments complexes. Ce genre de chose
qui [alourdis une page qui n’en a pas
besoin](http://www.sitepoint.com/web-page-weight-2012/) avec des éléments HTML
et des images supplémentaires, ou des hacks qui font du mal aux performances de
ces vieux navigateurs (qui ne sont déjà pas bien élevées). A-t-on absolument
besoin de bords arrondis pour ces navigateurs? Ajoutent-ils de la valeur à
notre page? Sur un navigateur qui le permet facilement, certainement que oui.
Sur un navigateur qui demande du travail supplémentaire qui provoquera une
baisse de performances (et donc de confort d’utilisation), certainement que
non.

Mais le client a validé ces maquettes, et le designer (et peut être le chef de
projet) lui a dit que c’était tout à fait possible de faire des bords arrondis
sur IE7+, parce qu’il l’a déjà vu sur un autre site. Le client attend donc des
bords arrondis sur IE7 lors de la livraison. Nouveau problème ici. Je pense
qu’il manque une étape. La maquette ne devrait-elle pas être validée (sur le
plan de la faisabilité) par l’intégrateur en premier lieu? Ne serait-ce que
pour se mettre d’accord sur le discours à avoir face au client : “OK pour les
bords arrondis, mais sous IE ça va pas être possible, sauf solutions de
contournement qui feront à coup sûr ramer le site dans ce navigateur, et donc
faire fuir vos clients potentiels qui l’utilisent”. Avec un tel discours
(réaliste), les bords arrondis risqueraient d’avoir beaucoup moins d’importance
aux yeux du client.

Ajoutons à tout ça du responsive, une page un peu spéciale qui nécessite des
positions absolues pour certains éléments, et on se retrouve presque en enfer.

Alors, avec tout ça, qu’est-ce qu’on fait? On se contente de se plaindre, ou on
propose quelques solutions?

On va proposer des solutions. La plus évidente, avec ce discours, ce serait que
le designer soit lui-même l’intégrateur. Ainsi, la vision dynamique qu’il a de
sa maquette statique ne peut pas s’échapper de son cerveau entre la phase du
design et celle de l’intégration, et le résultat final ne peut être
qu’identique à cette vision.

Une autre solution, comme je l’ai déjà évoqué, serait de discuter des maquettes
entre designer et intégrateur avant de les proposer au client. Ça peut paraître
bête (c’est surtout de ne pas le faire qui l’est, mais bon…), mais nombre de
soucis pourraient être évités, tout en gardant une certaine qualité pour les
maquettes.

Dernière solution. Celle qui rendraient les choses parfaites selon moi. Ne plus
faire de maquettes avec Photoshop. Oh bah comment qu’on fait alors? Le client
il valide quoi? Ben le client, il valide une idée générale de la page, et des
[style
tiles](http://letrainde13h37.fr/4/style-tiles-nouvel-outil-pour-webdesigner/)
par exemple. De cette manière, il n’a pas une image fixe de sa page, mais se la
représente tout de même. Ça fonctionne, la preuve : [Pandasuite, le site
vitrine](http://www.inpixelitrust.fr/portfolio/pandasuite-site-vitrine/)
(Stéphanie Walter). Je suppose qu’il faut tout de même avoir affaire à un
client à l’esprit ouvert.

Je débute dans le domaine de l’intégration. J’ai peut être dis des conneries.
Mais c’est comme ça que je ressens les choses. Je suis frustré, parce que je
devrais respecter des maquettes, mais que je pense que c’est impossible.

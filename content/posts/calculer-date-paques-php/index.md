---
title: "J'ai eu besoin de connaître la date de pâques chaque année jusqu'à l'infini et au-delà"
date: "2014-04-01"
---

Pour un projet de gestion de demandes de congés, j’ai eu besoin de connaître
les dates de chaque jour férié (sauf le lundi de Pentecôte puisqu’il est
maintenant ouvré).

Facile, certains sont fixes. D’autres sont fonction de Pâques, qui est lui même
variable. Ambiance.

<span class="more"></span>

Je me renseigne donc sur Pâques, et me retrouve rapidement sur [ce genre de
page wikipedia](http://fr.wikipedia.org/wiki/Calcul_de_la_date_de_P%C3%A2ques).

Puisque des algorithmes existent, je me dis que ça a bien du être implémenté,
que ce soit dans la SPL ou par n’importe qui d’autre. Après un petit coup de
google, me voici sur la documentation de [la fonction PHP
`easter_date()`](http://php.net/manual/fr/function.easter-date.php).

Ça a l’air satisfaisant. Pourtant en lisant l’avertissement présent sur la
page, je me rend compte que ça ne va pas aller. Certes 2037 c’est loin, tout
aura changé d’ici là, mais pour le principe, je veux que ça marche tout le
temps.

Un peu plus bas sur la même page, une note nous dit que `easter_date()` ne se
base pas sur le fuseau horaire par défaut de PHP mais celui du système. Encore
un mauvais point. Cette fois par contre la doc propose une solution à ce
problème, et au précédent par la même occasion : utiliser [la fonction
`easter_days()`](http://www.php.net/manual/fr/function.easter-days.php).

Puisqu’on sait que Pâques tombe entre le 21 mars et le 25 avril, alors il
suffit de prendre comme base le 21 mars et y ajouter le résultat de
`easter_days()` pour l’année voulue. C’est partit. On va faire une petite
méthode qui renvoie un tableau de DateTime représentant les jours fériés pour
l’année passée en paramètre.

```php
/**
 * @brief Retourne le tableau des jours fériés (DateTime)
 * @param $year
 * @return array
 */
protected function getHolidays($year)
{
    $holidays = array();

    // Fixed holidays
    $fixedDates = array('01-01', '05-01', '05-08', '07-14', '08-15', '11-01', '11-11', '12-25');

    foreach ($fixedDates as $date)
    {
        $holidays[] = new DateTime($year . '-' . $date);
    }

    // Variables holidays, depending on easter
    $easter = new DateTime($year . '-03-21');
    $nbDays = easter_days($year);
    $easter->add(new DateInterval('P' . $nbDays . 'D'));
    $holidays[] = clone $easter;

    $easterMonday = clone $easter;
    $easterMonday->add(new DateInterval('P1D'));
    $holidays[] = $easterMonday;

    $easterThursday = clone $easter;
    $easterThursday->add(new DateInterval('P39D'));
    $holidays[] = $easterThursday;

    return $holidays;
}
```

On peut maintenant faire une méthode qui prend en paramètre un DateTime et qui
nous dit si celui-ci est un jour férié ou non :

```php
/**
 * @param DateTime $date
 * @return bool
 */
protected function isHoliday(\DateTime $date)
{
    $year = intval($date->format('Y'));
    $holidays = $this->getHolidays($year);

    return in_array($date, $holidays);
}
```

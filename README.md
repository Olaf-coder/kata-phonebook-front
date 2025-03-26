# Phonebook-Frontend

Ce projet de repertoire de contact est un exercice mandaté par un client afin de juger de mes compétence en developpement full-stack Java 17 & angular 19

Ce repository git contient le code front end, pour pouvoir lancer le projet, vous aurez besoin du backend [Phonebook-Backend](https://github.com/Olaf-coder/kata-phonebook-back)

## Sujet

Ce projet demande de pouvoir gerer une liste de contact simple (ajouter, supprimer, lister, mettre a jour et filtrer par id, ou bien par nom et/ou prenom

## Choix des technologies

Une des contraintes demandé était d'avoir une API, du stockage en mémoire (donc local), et les composantes techniques suivantes étaient imposées pour le Front:

- Angular 19

C'est pour toutes ces raisons pour lesquelles j'ai pu exploiter certaines nouveautés comme les signals pour les inputs ouputs.
Cependant, certaines fonctionnalités sont parfois incomplete ou risque de voir leur cahier des charges changer.
Par exemple je n'ai pas utilisé ressourceAPI pour les Api car pour le moment elle ne se concentre que sur la methode GET. je suis donc resté sur des observable pour les appels API.

## Améliorations possibles
L'autre choix principal de ce projet, au vu du temps imparti pour le faire, c'est de prioriser les fonctionnalités et le respect du cahier des charges plutôt que de mettre l'accent sur le design de l'interface.
En temps normal, j'aurais usés des flexbox si j'était parti sur une solution totalement customisé, ou j'aurai tout mis dans un mat-table avec des boutons editer/supprimer pour chaque lignes, un mode edition pour editer les lignes, etc etc

Par manque de temps, je n'ai pas non plus utilisé les signals pour afficher dynamiquement le résultat des recherches par critére en dessous du formulaire, mais je connais la pratique. 

## Information supplémentaire
### Quickstart

Au premier lancement, il faut lancer a la racine du projet la commande suivante:

    npm install

Idem pour lancer le projet, il faut lancer a la racine du projet la commande suivante:

    npm start

Le front-end ne peut pas se lancer sans le projet Back-end.

Pour la configuration, quand le projet se lance il est actuellement sur le port 4200. (http://localhost:4200)

Si jamais le port d'ecoute pour le back-end a été changé manuellement, vous pouvez changer ici aussi le port d'ecoute. Il faut modifier la ligne suivante dans src\proxy.conf.json:

    {
        "/api": {
            "target": "http://localhost:8080",
        }
    }

Lorsque des données sont enregistrées, vous les trouverez à la racine du dossier dans phonebookDB.mv.db.
A savoir qu'il existe des solutions pour transformer ce fichier en Json.

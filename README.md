# padawan

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Rite de passage du padawan Front

## Préambule

L'objectif principal de ce test est de nous permettre d'évaluer votre coding style, votre rigueur et votre capacité à produire du beau code.
En parlant de beauté, vous êtes totalement libre concernant l'UI/UX de l'application: vous pouvez utiliser le framework CSS de votre choix afin d'embellir votre oeuvre. La seule condition à respecter étant que __l'application doit être responsive__.

## VueJS

Une application VueJS a été installée au préalable afin de vous aider à commencer le test. Cependant, libre à vous de changer de framework.
Vous pouvez lancer l'application via la commande `npm run dev`.

## JSON Server

Ce test utilise `json-server` pour simuler une api REST.
https://github.com/typicode/json-server
La db est stockée dans le fichier json `db.json` situé à la racine du projet.

Vous pouvez lancer l'api REST avec la commande `npm run server`.

## Les épreuves

### Épreuve 1
Votre première épreuve consistera à afficher la vente déjà créée et ses lots dans l'application VueJS.

### Épreuve 2

Votre application devra permettre de créer une vente avec des lots et de les persister dans le fichier `db.json`.

### Épreuve 3

Créer une nouvelle vue dans laquelle il sera possible de rechercher parmis les ventes et les lots avec un seul champ `input`.
Cet unique champ de recherche sera capable de trouver des ventes et des lots, à vous de trouver un moyen de les distinguer dans les résultats.

### Bonus

- Ajouter le konami code qui affiche un gif de votre choix

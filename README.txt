

Réaliser une petite web application permettant de gérer des annonces de biens immobilier (genre logic-immo).

Objectif avoir deux parties fonctionnelles :

- Back
- Front

## Consignes

- Utiliser MongoDB / Mongoose
- Utiliser ExpressJS
- Utiliser NodeJS
- Le front DOIT utiliser NodeJS (pas de framework JS genre Vue ou autre)
- Séparer les 2 parties (back / front)

Je ne tiendrais pas compte du style du code (si pas ES6 par exemple) ni de l'architecture du projet.

**A rendre avant 17h ce soir par email: j.pogeant@ecole-ipssi.net**

**Nom du fichier compressé `NOM_Prenom`**

## 1. Back

Avoir un CRUD permettant de gérer les annonces.

**⚠️ LE NOM DE LA BASE DE DONNÉES DOIT ÊTRE `immo` ⚠️**

- Ajouter une annonce
- Supprimer une annonce
- Modifier une annonce
- Récupérer des / une annonce

Le schema d'une annonce est le suivant :

```js
{
  "titre": "Appartement 5 pièces ...",
  "description": "blablabla",
  "adresse": "1 avenue des champs élysées",
  "code_postal": 75000,
  "ville": "Paris",
  "prix": 1000000 // euro
}
```

## 2. Front

Avoir les différentes pages dans le front

- Listing des annonces (Page Home)
- Page d'une annonce (Grâce à l'ID)
- Ajout d'une annonce (Formulaire)
- Modification d'une annonce existante (Formulaire)
- Pouvoir supprimer une annonce depuis le listing

Ne pas oublier de faire des liens afin de pouvoir naviguer entre les pages.

Je vous laisse gérer comme bon vous semble, le styles (pas obligatoire) et les données affichées sur les pages, du moment
que c'est fonctionnel.

Bien évidemment si vous faites du style etc, je tiendrais compte mais dans le cas contraire, ça ne fera pas chuter la note.
# LoL Champions - Test Technique Angular

# Description
Ce projet est une application Angular permettant de lister les champions de League of Legends en utilisant AG Grid.
L'application utilise un service en mémoire (angular-in-memory-web-api) pour simuler un backend REST qui sert les données des champions à partir d'un fichier JSON local.

Une fonctionnalité de suppression d'un champion est également implémentée côté front-end : cliquer sur la poubelle supprime la ligne dans la grille.

# Fonctionnalités

1-Affichage des colonnes : numéro, nom, titre, tags, et actions.

2- Suppression dynamique d'un champion dans la liste (front-end uniquement).

3- Données chargées depuis un service simulé en mémoire à partir d'un fichier JSON local.

# Structure du projet
# app.component.ts : 
 composant principal avec la grille AG Grid et la logique de suppression.

# ChampionService : 
 service Angular pour récupérer et supprimer les champions via HTTP.

# InMemoryDataService : 
 service simulant un backend REST avec les données chargées depuis champion_info_2.json.

# assets/data/champion_info_2.json : 
 fichier JSON contenant les données des champions.
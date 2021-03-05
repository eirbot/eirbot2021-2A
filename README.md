# EIRBOT 2021-2A : Equipe EIRBOT

![alt text](loutreB&W.png)


Ceci est le dépôt de l'équipe de 2A de l'association de robotique Eirbot. 

## Membres
Ce projet est réalisé par les différents membres de Eirbot en première année : 
- Alberty Maxime (SEE)
- Barrais Marius
- Camberlin Erwann (Matmeca)
- Delpeuch Sébastien (Informatique)
- Mangin Lucas
- Moroy Liam
- Neveu Emile
- Pouget Filipe
- Poupon Julien
- Savary Clément (SEE)
- Vaquori Yohann
- Vidal Martin

## Organisation du projet 

Le projet est découpé selon 4 axes correspondant aux 4 domaines de la construction de notre robot. La conception mécanique du robot est disponible dans le dossier `meca/`, les fichiers ont été réalisés sur Solidworks / onshape. La réalisation du robot a été faite grâce à des imprimantes 3D, découpeuse laser et fraiseuse disponibles au fablab de l'école. Dans le dossier `elec/` les différents fichiers des cartes électroniques que nous avons réalisé sont disponibles (fichiers kicad), elles ont été réalisées grâce à la chimie de l'enseirb et à la fraiseuse du fablab. Le dossier `spec/`contient tous les fichiers d'organisation de l'équipe. Finalement le dossier `code/`contient les différents code de ntore robot, un tutoriel dpour les déployer est disponible ci dessous.

## Installer le projet 

La compilation du projet est réalisée via `cmake` il est donc nécessaire de posséder le packet (`sudo apt install cmake` sous ubuntu) ainsi qu'un compilateur de c++ (`sudo apt install g++`). 

Effectuez ensuite les commandes suivantes : 
```
cd code/
mkdir build/
cd build/
cmake ..
```

Vous pouvez ensuite compiler le projet depuis le dossier build avec la commande `make project` ou `make test`


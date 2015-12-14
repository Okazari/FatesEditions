#!/bin/bash
# Indique au système que l'argument qui suit est le programme utilisé pour exécuter ce fichier
# En règle générale, les "#" servent à mettre en commentaire le texte qui suit comme ici

npm install bower -g
npm install mongoose-data-migrate -g
cd public/angularApp/
bower install
cd ../../models/
mongoose-data-migrate up

# Demo Express WebAPI

## Initialisation du projet

Commande a executer : 
```
npm init
npm i express
npm i nodemon --save-dev
```

Créer les fichiers : 
```
app.js
.gitignore (Via l'extension VSC 'gitignore' par exemple)
.env
```

Configurer les scripts du fichier "package.json"
```
  "scripts": {
    "start": "node --env-file=.env app.js",
    "dev": "nodemon --env-file=.env app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
```
NB : Le support natif des fichiers .env  est disponible depuis Node v20. Si vous utilisez un version plus ancienne, il est necessaire d'utiliser le package "dotenv".

## Structure de fichier proposé 
```
/controllers
  product.controller.js
  user.controller.js
/models
  index.js
  product.model.js
  user.model.js
/routers
  index.js
  product.router.js
  user.router.js
/services
  product.service.js
  user.service.js
.env
.gitignore
app.js
package.json
readme.md
```

## Demarrer le projet 

En Production
```
npm start  /  npm run start
```

En Dev
```
npm run dev
```
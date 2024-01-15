'use strict';

//! Import des packages (ESM)
import express from 'express';
import mainRouter from './routers/index.js';

//! Récuperation des variables d'env
/*
const MESSAGE = process.env.MESSAGE;
const PORT = process.env.PORT;
*/
const { NODE_ENV, PORT } = process.env

//! Initialiser la Web API (via Express)
const app = express();

//! Middleware (app-level)
//? Custom -> Logger
app.use(function loggerMiddleware(req, res, next) {

    // Traitement fait avant le prochain middleware
    const timerStart = new Date();
    
    // Le middleware passe la main au prochain middleware 
    next();
    
    // Traitement fait après que la middleware précédent soit terminé
    const timerEnd = new Date();
    const requestTime = timerEnd - timerStart;

    console.log(`[${req.method}] ${req.url} (${requestTime}ms)`);
});

//? Built-in (Middleware de Express)
app.use(express.json());  // Permet d'obtenir le body d'une requete "application/json"


//! Ajout des endpoint
//? Définition d'un endpoint directement dans le fichier app (à éviter)
/*
app.get('/demo', (req, res) => {
    res.json({
        messsage : 'Le message est : "' + MESSAGE + '".'
    });
})
*/
//? Définition des endpoints via les fichiers "router"
app.use(mainRouter);

//! Middleware (handle error)
app.use(function errorMiddlewarre(error, req, res, next) {

    if(NODE_ENV === 'dev') {
        console.log('Error middleware', error);
        res.status(500).json({
            error: error.message,
            stack: error.stack
        });
        return;
    }

    res.sendStatus(500);
})

//! Démarrer la Web API
app.listen(PORT, () => {
    console.log(`Web API running on port ${PORT} (${NODE_ENV})`);
});
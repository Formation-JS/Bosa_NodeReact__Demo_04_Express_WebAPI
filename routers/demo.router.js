//* Objectif : Définir les endpoints pour les routes "/demo/..."

//? Les exemples de endpoints : 
//  - /demo       -> Hello World (.env)
//  - /demo/Della -> Bonjour Della !
//  - /demo/42    -> L'id est 42
//      ↑
//     Prefix défini dans "index.js" du dossier "routers"

//! Importer les elements
//? - Le package "express"
import express from 'express';
//? - Le controller à utiliser
import demoController from './../controllers/demo.controller.js';

//! Création de l'objet "router"
const demoRouter = express.Router();

//! Middleware (router-level)
const middlewareTest = (req, res, next) => {
    console.log('Les params de la requete sont : ', req.params);
    next();
}

//! Ajouter les différents endpoints 
// Attention à l'ordre des routes !
demoRouter.get('/', demoController.getMessage);
demoRouter.get('/danger', demoController.getDanger);
demoRouter.get('/:id([0-9]+)', middlewareTest, demoController.getById);
demoRouter.get('/:name', middlewareTest, demoController.getByName);

//! Exporter l'objet "router"
export default demoRouter;
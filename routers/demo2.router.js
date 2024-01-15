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
import { getById, getByName, getMessage } from '../controllers/demo2.controller.js';

//! Création de l'objet "router"
const demoRouter = express.Router();

//! Ajouter les différents endpoints 
// Attention à l'ordre des routes !
demoRouter.get('/', getMessage);
demoRouter.get('/:id([0-9]+)', getById);
demoRouter.get('/:name', getByName);

//! Exporter l'objet "router"
export default demoRouter;
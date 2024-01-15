//* Objectif : Centraliser les routers et leurs ajouter un prefix

//! Imports
import { Router } from 'express';
import demoRouter from './demo.router.js';
import productRouter from './product.router.js';

//! Création de l'objet router "Principal"
const mainRouter = Router();

//! Injection des différents routers
mainRouter.use('/demo', demoRouter);
mainRouter.use('/product', productRouter);

//! Exporter l'objet "mainRouter" (ESM)
export default mainRouter;
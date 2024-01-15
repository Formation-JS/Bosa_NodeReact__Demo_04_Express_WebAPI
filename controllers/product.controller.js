import ProductService from '../services/product.service.js';

export const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);

    const productService = new ProductService();
    const product = productService.getById(productId);

    if(!product) {
        res.sendStatus(404);
        return;
    }
    res.status(200).json(product);
} 

export const getAllProduct = (req, res) => {
    const productService = new ProductService();
    const products = productService.getAll();

    res.status(200).json(products);
} 

export const addProduct = (req, res) => {
    const productService = new ProductService();

    // ↓ Ajouter de la validation de donnée !
    const productRequest = req.body;

    const productAdd = productService.add(productRequest)

    res.location(`product/${productAdd.id}`);
    res.status(201).json(productAdd)
} 

export const updateProduct = (req, res) => {
    res.sendStatus(501);
} 

export const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id);

    const productService = new ProductService();
    productService.delete(productId);

    res.sendStatus(204);
} 


import { Router } from 'express';
import { addProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from './../controllers/product.controller.js';

const productRouter = Router();

// productRouter.get('/', getAllProduct);
// productRouter.post('/', addProduct);
// productRouter.get('/:id', getProductById);
// productRouter.put('/:id', updateProduct);
// productRouter.delete('/:id', deleteProduct);

productRouter.route('/')
    .get(getAllProduct)
    .post(addProduct);

productRouter.route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);

export default productRouter;
import { Router } from 'express';

import { CreateProductController } from '@modules/products/useCases/createProduct/CreateProductController';
import { DeleteProductByIdController } from '@modules/products/useCases/deleteProduct/DeleteProductController';
import { FindproductByIdController } from '@modules/products/useCases/findProductById/FindProductByIdController';
import { ListProductsController } from '@modules/products/useCases/listProducts/ListProductsController';
import { UpdateProductController } from '@modules/products/useCases/updateProduct/UpdateProductController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureEnableUser } from '../middlewares/ensureEnableUser';

const productRouter = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductsController();
const findByIdProductController = new FindproductByIdController();
const deleteProductController = new DeleteProductByIdController();
const updateProductController = new UpdateProductController();

productRouter.post(
  '/product',
  ensureAuthenticated,
  ensureEnableUser,
  createProductController.handle
);
productRouter.get(
  '/product',
  ensureAuthenticated,
  ensureEnableUser,
  listProductController.handle
);
productRouter.get(
  '/product/:id',
  ensureAuthenticated,
  ensureEnableUser,
  findByIdProductController.handle
);
productRouter.delete(
  '/product/:id',
  ensureAuthenticated,
  ensureEnableUser,
  deleteProductController.handle
);
productRouter.put(
  '/product/:id',
  ensureAuthenticated,
  ensureEnableUser,
  updateProductController.handle
);

export { productRouter };

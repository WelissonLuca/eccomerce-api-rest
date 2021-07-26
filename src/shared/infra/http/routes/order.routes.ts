import { Router } from 'express';

import { CreateOrderController } from '@modules/orders/useCases/createOrder/CreateOrderController';
import { DeleteOrderByIdController } from '@modules/orders/useCases/deleteOrder/DeleteOrderController';
import { FindOrdertByIdController } from '@modules/orders/useCases/findOrderById/FindOrderByIdController';
import { ListOrdersController } from '@modules/orders/useCases/listOrders/ListOrdersController';
import { UpdateOrderController } from '@modules/orders/useCases/updateOrder/UpdateOrderController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureEnableUser } from '../middlewares/ensureEnableUser';

const orderRouter = Router();
const createOrderController = new CreateOrderController();
const listOrdersController = new ListOrdersController();
const findByUdOrderIdController = new FindOrdertByIdController();
const updateOrderController = new UpdateOrderController();
const deleteOrderByIdController = new DeleteOrderByIdController();
orderRouter.post(
  '/order',
  ensureAuthenticated,
  ensureEnableUser,
  createOrderController.handle
);
orderRouter.get(
  '/order',
  ensureAuthenticated,
  ensureEnableUser,
  listOrdersController.handle
);
orderRouter.get(
  '/order/:id',
  ensureAuthenticated,
  ensureEnableUser,
  findByUdOrderIdController.handle
);
orderRouter.put(
  '/order/:id',
  ensureAuthenticated,
  ensureEnableUser,
  updateOrderController.handle
);
orderRouter.delete(
  '/order/:id',
  ensureAuthenticated,
  ensureEnableUser,
  deleteOrderByIdController.handle
);
export { orderRouter };

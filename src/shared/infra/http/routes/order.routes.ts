import { Router } from 'express';

import { CreateOrderController } from '@modules/orders/useCases/createOrder/CreateOrderController';
import { DeleteOrderByIdController } from '@modules/orders/useCases/deleteOrder/DeleteOrderController';
import { FindOrdertByIdController } from '@modules/orders/useCases/findOrderById/FindOrderByIdController';
import { ListOrdersController } from '@modules/orders/useCases/listOrders/ListOrdersController';
import { UpdateOrderController } from '@modules/orders/useCases/updateOrder/UpdateOrderController';

const orderRouter = Router();
const createOrderController = new CreateOrderController();
const listOrdersController = new ListOrdersController();
const findByUdOrderIdController = new FindOrdertByIdController();
const updateOrderController = new UpdateOrderController();
const deleteOrderByIdController = new DeleteOrderByIdController();
orderRouter.post('/order', createOrderController.handle);
orderRouter.get('/order', listOrdersController.handle);
orderRouter.get('/order/:id', findByUdOrderIdController.handle);
orderRouter.put('/order/:id', updateOrderController.handle);
orderRouter.delete('/order/:id', deleteOrderByIdController.handle);
export { orderRouter };

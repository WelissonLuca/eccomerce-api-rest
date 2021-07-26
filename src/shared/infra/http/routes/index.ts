import { Router } from 'express';

import { orderRouter } from './order.routes';
import { productRouter } from './product.routes';
import { userRouter } from './users.routes';

const router = Router();

router.use('/accounts', userRouter);
router.use(productRouter, orderRouter);
export { router };

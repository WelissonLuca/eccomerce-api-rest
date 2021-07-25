import { Router } from 'express';

import { productRouter } from './product.routes';
import { userRouter } from './users.routes';

const router = Router();

router.use('/accounts', userRouter);
router.use(productRouter);
export { router };

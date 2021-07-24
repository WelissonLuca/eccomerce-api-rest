import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/createUser/createUserController';
import { ListUsersController } from '@modules/accounts/useCases/listUsers/ListUserController';

const userRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

userRouter.post(
  '/users',

  createUserController.handle
);
userRouter.get('/users', listUsersController.handle);
export { userRouter };

import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/createUser/createUserController';
import { ListUsersController } from '@modules/accounts/useCases/listUsers/ListUserController';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';

const userRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
userRouter.post(
  '/users',

  createUserController.handle
);
userRouter.get('/users', listUsersController.handle);
userRouter.put('/users/:id', updateUserController.handle);
export { userRouter };

import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/createUser/createUserController';
import { DeleteUserByIdController } from '@modules/accounts/useCases/deleteUser/DeleteUserController';
import { DisableUserByIdController } from '@modules/accounts/useCases/disableUser/DisableUserController';
import { FindUserByEmailController } from '@modules/accounts/useCases/findUserByEmail/FindUserByEmailController';
import { FindUserByIdController } from '@modules/accounts/useCases/findUserById/FindUserByIdController';
import { ListUsersController } from '@modules/accounts/useCases/listUsers/ListUserController';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';

const userRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const findByIdUserController = new FindUserByIdController();
const findByEmailUserController = new FindUserByEmailController();
const disableUserController = new DisableUserByIdController();
const deleteUserController = new DeleteUserByIdController();
userRouter.post(
  '/users',

  createUserController.handle
);
userRouter.get('/users', listUsersController.handle);
userRouter.put('/users/:id', updateUserController.handle);
userRouter.get('/users/:id', findByIdUserController.handle);
userRouter.get('/users/email/:email', findByEmailUserController.handle);
userRouter.delete('/users/:id/disable', disableUserController.handle);
userRouter.delete('/users/:id', deleteUserController.handle);
export { userRouter };

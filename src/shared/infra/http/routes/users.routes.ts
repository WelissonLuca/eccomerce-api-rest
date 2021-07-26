import { Router } from 'express';

import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '@modules/accounts/useCases/createUser/createUserController';
import { DeleteUserByIdController } from '@modules/accounts/useCases/deleteUser/DeleteUserController';
import { DisableUserByIdController } from '@modules/accounts/useCases/disableUser/DisableUserController';
import { FindUserByEmailController } from '@modules/accounts/useCases/findUserByEmail/FindUserByEmailController';
import { FindUserByIdController } from '@modules/accounts/useCases/findUserById/FindUserByIdController';
import { ListUsersController } from '@modules/accounts/useCases/listUsers/ListUserController';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureEnableUser } from '../middlewares/ensureEnableUser';

const userRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
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
userRouter.post('/login', authenticateUserController.handle);
userRouter.get('/users', listUsersController.handle);
userRouter.put(
  '/users/:id',
  ensureAuthenticated,
  ensureEnableUser,
  updateUserController.handle
);
userRouter.get(
  '/users/:id',
  ensureAuthenticated,
  ensureEnableUser,
  findByIdUserController.handle
);
userRouter.get(
  '/users/email/:email',
  ensureAuthenticated,
  ensureEnableUser,
  findByEmailUserController.handle
);
userRouter.delete(
  '/users/:id/disable',
  ensureAuthenticated,
  ensureEnableUser,
  disableUserController.handle
);
userRouter.delete(
  '/users/:id',
  ensureAuthenticated,
  ensureEnableUser,
  deleteUserController.handle
);
export { userRouter };

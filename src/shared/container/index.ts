import { container } from 'tsyringe';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { ProductRepository } from '@modules/products/infra/typeorm/repositories/ProductRepository';
import { IProductRepository } from '@modules/products/repositories/IProductRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository
);

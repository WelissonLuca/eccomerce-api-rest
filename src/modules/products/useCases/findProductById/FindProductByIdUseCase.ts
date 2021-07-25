import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@modules/products/repositories/IProductRepository';
import { AppError } from '@shared/errors/AppError';

import { Product } from '../../infra/typeorm/entities/Product';

@injectable()
class FindProductByIdUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  async execute(id: string): Promise<Product> {
    const result = await this.productRepository.findById(id);
    if (!result) throw new AppError('Product not found', 404);

    return result;
  }
}

export { FindProductByIdUseCase };

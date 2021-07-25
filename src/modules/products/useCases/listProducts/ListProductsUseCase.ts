import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@modules/products/repositories/IProductRepository';

import { Product } from '../../infra/typeorm/entities/Product';

@injectable()
class ListProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  async execute(): Promise<Product[]> {
    const result = await this.productRepository.findAll();

    return result;
  }
}

export { ListProductsUseCase };

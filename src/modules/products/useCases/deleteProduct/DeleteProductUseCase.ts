import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@modules/products/repositories/IProductRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteProductByIdUseCase {
  constructor(
    @inject('ProductRepository')
    private ProductRepository: IProductRepository
  ) {}
  async execute(id: string): Promise<void> {
    const result = await this.ProductRepository.findById(id);
    if (!result) throw new AppError('Product not found', 404);
    await this.ProductRepository.delete(id);
  }
}

export { DeleteProductByIdUseCase };

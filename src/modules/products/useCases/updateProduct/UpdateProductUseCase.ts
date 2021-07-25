import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@modules/products/repositories/IProductRepository';
import { AppError } from '@shared/errors/AppError';

interface IProductRequest {
  note?: string;
  color?: string;
  value?: string;
}

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  async execute(
    id: string,
    { note, color, value }: IProductRequest
  ): Promise<void> {
    const productExists = await this.productRepository.findById(id);

    if (!productExists) throw new AppError('Product not exists!', 404);

    await this.productRepository.updateProduct(id, {
      note,
      color,
      value,
    });
  }
}

export { UpdateProductUseCase };

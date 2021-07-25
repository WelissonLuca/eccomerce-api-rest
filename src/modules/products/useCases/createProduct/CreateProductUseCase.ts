import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@modules/products/repositories/IProductRepository';
import { AppError } from '@shared/errors/AppError';

import { Product } from '../../infra/typeorm/entities/Product';

interface IProductRequest {
  name: string;
  note: string;
  color: string;
  size: string;
  value: string;
}

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  async execute({
    name,
    note,
    color,
    size,
    value,
  }: IProductRequest): Promise<Product> {
    if (!name) throw new AppError('Name incorrect!');

    const result = this.productRepository.create({
      name,
      note,
      color,
      size,
      value,
    });

    return result;
  }
}

export { CreateProductUseCase };

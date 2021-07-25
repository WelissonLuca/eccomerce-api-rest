import { getRepository, Repository } from 'typeorm';

import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { IUpdateProductDTO } from '@modules/products/dtos/IUpdateProductDTO';
import { IProductRepository } from '@modules/products/repositories/IProductRepository';

import { Product } from '../entities/Product';

class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({
    name,
    color,
    size,
    value,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      name,
      color,
      size,
      value,
    });

    const result = await this.repository.save(product);

    return result;
  }

  async findAll(): Promise<Product[]> {
    const result = await this.repository.find();
    return result;
  }

  async findById(id: string): Promise<Product> {
    const result = await this.repository.findOne({ id });

    return result;
  }
  async updateProduct(
    id: string,
    { color, value }: IUpdateProductDTO
  ): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ color, value })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete({
      id,
    });
  }
}

export { ProductRepository };

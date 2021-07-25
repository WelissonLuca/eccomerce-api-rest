import { ICreateProductDTO } from '../dtos/ICreateProductDTO';
import { IUpdateProductDTO } from '../dtos/IUpdateProductDTO';
import { Product } from '../infra/typeorm/entities/Product';

interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  updateProduct(id: string, data: IUpdateProductDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IProductRepository };

import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { IUpdateOrderDTO } from '../dtos/IUpdateOrderDTO';
import { Order } from '../infra/typeorm/entities/Orders';

interface IOrderRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order>;
  updateOrder(id: string, data: IUpdateOrderDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IOrderRepository };

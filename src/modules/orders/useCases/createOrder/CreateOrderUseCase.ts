import { inject, injectable } from 'tsyringe';

import { IOrderRepository } from '@modules/orders/repositories/IOrderRepository';

import { Order } from '../../infra/typeorm/entities/Orders';

interface IProductRequest {
  order_date: Date;
  note: string;
  payment_methods: string;
  client_id: string;
  product_id: string;
}

@injectable()
class CreateOrderUseCase {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}
  async execute({
    order_date = new Date(),
    note,
    payment_methods,
    client_id,
    product_id,
  }: IProductRequest): Promise<Order> {
    const result = this.orderRepository.create({
      order_date,
      note,
      payment_methods,
      client_id,
      product_id,
    });

    return result;
  }
}

export { CreateOrderUseCase };

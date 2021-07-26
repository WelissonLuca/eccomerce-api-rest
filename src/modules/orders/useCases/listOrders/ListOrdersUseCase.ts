import { inject, injectable } from 'tsyringe';

import { IOrderRepository } from '@modules/orders/repositories/IOrderRepository';

import { Order } from '../../infra/typeorm/entities/Orders';

@injectable()
class ListOrdersUseCase {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}
  async execute(): Promise<Order[]> {
    const result = await this.orderRepository.findAll();

    return result;
  }
}

export { ListOrdersUseCase };

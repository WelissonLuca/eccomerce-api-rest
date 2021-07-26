import { inject, injectable } from 'tsyringe';

import { IOrderRepository } from '@modules/orders/repositories/IOrderRepository';
import { AppError } from '@shared/errors/AppError';

import { Order } from '../../infra/typeorm/entities/Orders';

@injectable()
class FindOrderByIdUseCase {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}
  async execute(id: string): Promise<Order> {
    const result = await this.orderRepository.findById(id);
    if (!result) throw new AppError('Order not found', 404);

    return result;
  }
}

export { FindOrderByIdUseCase };

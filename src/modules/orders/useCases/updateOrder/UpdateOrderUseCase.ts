import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IOrderRepository } from '@modules/orders/repositories/IOrderRepository';

interface IProductRequest {
  note?: string;
  payment_methods?: string;
}

@injectable()
class UpdateOrderUseCase {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}
  async execute(
    id: string,
    { note, payment_methods }: IProductRequest
  ): Promise<void> {
    const orderExists = await this.orderRepository.findById(id);

    if (!orderExists) throw new AppError('Order not exists!', 404);

    await this.orderRepository.updateOrder(id, {
      note,
      payment_methods,
    });
  }
}

export { UpdateOrderUseCase };

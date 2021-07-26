import { inject, injectable } from 'tsyringe';

import { IOrderRepository } from '@modules/orders/repositories/IOrderRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteOrderByIdUseCase {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}
  async execute(id: string): Promise<void> {
    const result = await this.orderRepository.findById(id);
    if (!result) throw new AppError('Order not found', 404);
    await this.orderRepository.delete(id);
  }
}

export { DeleteOrderByIdUseCase };

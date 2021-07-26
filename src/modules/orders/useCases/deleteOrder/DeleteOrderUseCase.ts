import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IOrderRepository } from '@modules/orders/repositories/IOrderRepository';

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

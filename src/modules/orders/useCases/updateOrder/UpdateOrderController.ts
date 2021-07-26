import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateOrderUseCase } from './UpdateOrderUseCase';

class UpdateOrderController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { note, payment_methods } = request.body;

    const updateOrderUseCase = container.resolve(UpdateOrderUseCase);

    const order = await updateOrderUseCase.execute(id, {
      note,
      payment_methods,
    });

    return response.status(201).json({
      message: 'order update successfully',
      result: order,
    });
  }
}

export { UpdateOrderController };

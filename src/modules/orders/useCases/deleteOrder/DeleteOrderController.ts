import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteOrderByIdUseCase } from './DeleteOrderUseCase';

class DeleteOrderByIdController {
  async handle(request: Request, response: Response) {
    const deleteOrderByIdUseCase = container.resolve(DeleteOrderByIdUseCase);

    const { id } = request.params;
    await deleteOrderByIdUseCase.execute(id);

    return response.json({
      message: 'order deleted success',
    });
  }
}

export { DeleteOrderByIdController };

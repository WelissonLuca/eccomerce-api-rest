import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateProductUseCase } from './UpdateProductUseCase';

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { note, color, value } = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    const product = await updateProductUseCase.execute(id, {
      note,
      color,
      value,
    });

    return response.status(201).json({
      message: 'product update successfully',
      result: product,
    });
  }
}

export { UpdateProductController };

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteProductByIdUseCase } from './DeleteProductUseCase';

class DeleteProductByIdController {
  async handle(request: Request, response: Response) {
    const deleteProductByIdUseCase = container.resolve(
      DeleteProductByIdUseCase
    );

    const { id } = request.params;
    await deleteProductByIdUseCase.execute(id);

    return response.json({
      message: 'product deleted success',
    });
  }
}

export { DeleteProductByIdController };

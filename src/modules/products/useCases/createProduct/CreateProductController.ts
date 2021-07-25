import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, note, color, size, value } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const product = await createProductUseCase.execute({
      name,
      note,
      color,
      size,
      value,
    });

    return response.status(201).json({
      message: 'product created successfully',
      result: product,
    });
  }
}

export { CreateProductController };

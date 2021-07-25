import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindProductByIdUseCase } from './FindProductByIdUseCase';

class FindproductByIdController {
  async handle(request: Request, response: Response) {
    const findProductByIdUseCase = container.resolve(FindProductByIdUseCase);

    const { id } = request.params;
    const product = await findProductByIdUseCase.execute(id);

    return response.json(product);
  }
}

export { FindproductByIdController };

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindOrderByIdUseCase } from './FindOrderByIdUseCase';

class FindOrdertByIdController {
  async handle(request: Request, response: Response) {
    const findOrderByIdUseCase = container.resolve(FindOrderByIdUseCase);

    const { id } = request.params;
    const order = await findOrderByIdUseCase.execute(id);

    return response.json(order);
  }
}

export { FindOrdertByIdController };

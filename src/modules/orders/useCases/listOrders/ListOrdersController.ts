import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListOrdersUseCase } from './ListOrdersUseCase';

class ListOrdersController {
  async handle(request: Request, response: Response) {
    const listOrdersUseCase = container.resolve(ListOrdersUseCase);

    const oders = await listOrdersUseCase.execute();

    return response.json(oders);
  }
}

export { ListOrdersController };

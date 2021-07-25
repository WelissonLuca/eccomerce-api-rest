import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByIdUseCase } from './FindUserByIdUseCase';

class FindUserByIdController {
  async handle(request: Request, response: Response) {
    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase);

    const { id } = request.params;
    const users = await findUserByIdUseCase.execute(id);

    return response.json(users);
  }
}

export { FindUserByIdController };

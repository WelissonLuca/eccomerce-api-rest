import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByEmailUseCase } from './FindUserByEmailUseCase';

class FindUserByEmailController {
  async handle(request: Request, response: Response) {
    const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase);

    const { email } = request.params;
    const users = await findUserByEmailUseCase.execute(email);

    return response.json(users);
  }
}

export { FindUserByEmailController };

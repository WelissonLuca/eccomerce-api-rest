import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, oldPassword, password } = request.body;

    const createUserUseCase = container.resolve(UpdateUserUseCase);

    const user = await createUserUseCase.execute(id, oldPassword, {
      name,
      email,
      password,
    });

    return response.status(201).json({
      message: 'user update successfully',
      result: user,
    });
  }
}

export { UpdateUserController };

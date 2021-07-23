import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, cpf, password, gender, enable = true } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      name,
      email,
      cpf,
      password,
      gender,
      enable,
    });

    return response.status(201).json({
      message: 'user created successfully',
      result: user,
    });
  }
}

export { CreateUserController };

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DisableUserByIdUseCase } from './DisableUserUseCase';

class DisableUserByIdController {
  async handle(request: Request, response: Response) {
    const disableUserByIdUseCase = container.resolve(DisableUserByIdUseCase);

    const { id } = request.params;
    await disableUserByIdUseCase.execute(id);

    return response.json({
      message: 'user disabled success',
    });
  }
}

export { DisableUserByIdController };

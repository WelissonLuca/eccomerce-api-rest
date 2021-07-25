import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserByIdUseCase } from './DeleteUserUseCase';

class DeleteUserByIdController {
  async handle(request: Request, response: Response) {
    const deleteUserByIdUseCase = container.resolve(DeleteUserByIdUseCase);

    const { id } = request.params;
    await deleteUserByIdUseCase.execute(id);

    return response.json({
      message: 'user deleted success',
    });
  }
}

export { DeleteUserByIdController };

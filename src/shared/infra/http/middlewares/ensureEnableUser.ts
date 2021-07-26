import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';

export async function ensureEnableUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const usersRepositories = container.resolve(UserRepository);

  const { enable } = await usersRepositories.findById(user_id);

  if (!enable) {
    return next();
  }

  return response.status(401).json({
    error: 'Unauthorized, only enable users',
  });
}

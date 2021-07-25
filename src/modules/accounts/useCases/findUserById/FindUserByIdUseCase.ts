import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

import { User } from '../../infra/typeorm/entities/User';

@injectable()
class FindUserByIdUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(id: string): Promise<User> {
    const result = await this.userRepository.findById(id);
    if (!result) throw new AppError('User not found', 404);

    return result;
  }
}

export { FindUserByIdUseCase };

import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

import { User } from '../../infra/typeorm/entities/User';

@injectable()
class FindUserByEmailUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(email: string): Promise<User> {
    const result = await this.userRepository.findByEmail(email);
    if (!result) throw new AppError('User not found', 404);

    return result;
  }
}

export { FindUserByEmailUseCase };

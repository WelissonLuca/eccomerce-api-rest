import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DisableUserByIdUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(id: string, enable = true): Promise<void> {
    const result = await this.userRepository.findById(id);
    if (!result) throw new AppError('User not found', 404);
    await this.userRepository.disableUser(id, enable);
  }
}

export { DisableUserByIdUseCase };

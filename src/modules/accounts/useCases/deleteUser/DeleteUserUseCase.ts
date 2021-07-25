import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteUserByIdUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(id: string): Promise<void> {
    const result = await this.userRepository.findById(id);
    if (!result) throw new AppError('User not found', 404);
    await this.userRepository.delete(id);
  }
}

export { DeleteUserByIdUseCase };

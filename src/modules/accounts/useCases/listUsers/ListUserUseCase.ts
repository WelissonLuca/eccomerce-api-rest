import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';

import { User } from '../../infra/typeorm/entities/User';

@injectable()
class ListUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(): Promise<User[]> {
    const [name, email, cpf, gender, created_at, updated_at] =
      await this.userRepository.findAll();

    const result = [name, email, cpf, gender, created_at, updated_at];

    return result;
  }
}

export { ListUserUseCase };

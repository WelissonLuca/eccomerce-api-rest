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
    const result = await this.userRepository.findAll();

    return result;
  }
}

export { ListUserUseCase };

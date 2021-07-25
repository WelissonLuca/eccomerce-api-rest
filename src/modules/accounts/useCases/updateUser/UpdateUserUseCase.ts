import { compare, hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

interface IUserRequest {
  name?: string;
  email?: string;
  password?: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(
    id: string,
    oldPassword: string,
    { name, email, password }: IUserRequest
  ): Promise<void> {
    if (!email) throw new AppError('Email incorrect!', 401);

    const userExists = await this.userRepository.findById(id);

    if (!userExists) throw new AppError('User not exists!', 404);
    const passwordMatch = await compare(oldPassword, userExists.password);
    if (!passwordMatch) throw new AppError('Password incorrect!', 401);
    const passwordHash = await hash(password, 8);

    await this.userRepository.updateUser(id, {
      name,
      email,
      password: passwordHash,
    });
  }
}

export { UpdateUserUseCase };

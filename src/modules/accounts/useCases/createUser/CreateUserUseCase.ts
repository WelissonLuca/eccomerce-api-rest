import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

import { User } from '../../infra/typeorm/entities/User';

interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
  enable?: boolean;
  gender: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute({
    name,
    email,
    cpf,
    password,
    gender,
    enable = true,
  }: IUserRequest): Promise<User> {
    if (!email) throw new AppError('Email incorrect!');

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError('User already exists!');

    const passwordHash = await hash(password, 8);

    const result = this.userRepository.create({
      name,
      cpf,
      email,
      password: passwordHash,
      gender,
      enable,
    });

    return result;
  }
}

export { CreateUserUseCase };

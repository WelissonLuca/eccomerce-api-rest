import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '@modules/accounts/dtos/IUpdateUserDTO';
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';

import { User } from '../entities/User';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    enable,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      enable,
    });

    const result = await this.repository.save(user);

    return result;
  }

  async findAll(): Promise<User[]> {
    const result = await this.repository.find();
    return result;
  }

  async findByEmail(email: string): Promise<User> {
    const result = await this.repository.findOne({
      email,
    });

    return result;
  }

  async findById(id: string): Promise<User> {
    const result = await this.repository.findOne({ id });

    return result;
  }
  async updateUser(
    id: string,
    { name, email, password }: IUpdateUserDTO
  ): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ name, email, password })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }
  async disableUser(id: string, enable: boolean): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ enable })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete({
      id,
    });
  }
}

export { UserRepository };

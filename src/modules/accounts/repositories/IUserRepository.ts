import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  updateUser(id: string, data: IUpdateUserDTO): Promise<void>;
  disableUser(id: string, enable: boolean): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUserRepository };

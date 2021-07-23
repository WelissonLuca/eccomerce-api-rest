interface ICreateUserDTO {
  name: string;
  email: string;
  cpf: string;
  password: string;
  enable?: boolean;
  gender: string;
}

export { ICreateUserDTO };

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  enable?: boolean;
}

export { ICreateUserDTO };

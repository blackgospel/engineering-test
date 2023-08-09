export type IUserSchema = {
  id: string;
  name: string;
  email: string;
};

export type ICreateUserSchema = Pick<IUserSchema, 'email' | 'name'>;

export type IUserAPI = IUserSchema[];

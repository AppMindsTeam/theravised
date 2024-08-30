export interface IUserContext {
  user?: IUser;
  setUser: (user: IUser) => void;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  referalCode: string;
}

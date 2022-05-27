export interface IUser {
    _id: string;
    username: string;
    email:string;
    createdAt: string;
    accessToken: string;
}

export interface  ILoginObj {
    email: string;
    password: string;
}
export interface ISignupObj  extends ILoginObj {
    username: string;
}

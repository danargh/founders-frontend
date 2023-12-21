// response
export interface Response<T> {
   status: string;
   code: number;
   message: string;
   data: T | null;
}

// user
export interface User {
   id: string;
   email: number;
   username: string;
   password: string;
   createdAt: Date;
   auth: Auth;
   role: string;
}
interface Auth {
   token: string;
   expiresIn: Date;
}

export interface LoginUser {
   email: string;
   password: string;
}

// query
export interface QueryResult<T> {
   data: T | undefined;
   error: Error | null;
   isLoading: boolean;
}

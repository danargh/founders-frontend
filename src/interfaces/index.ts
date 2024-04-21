// response
export interface Response<T> {
   status: string;
   code: number;
   message: string;
   data: T;
}
export interface ResponseOnly {
   status: string;
   code: number;
   message: string;
   userMessage: string;
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
   membership: string;

   maleName: string;
   femaleName: string;
   websiteUrl: string;
   phone: string;
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

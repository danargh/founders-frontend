// user
export interface User {
   id: string;
   username: string;
   email: number;
   password: string;
   role: string;
   createdAt: Date;
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

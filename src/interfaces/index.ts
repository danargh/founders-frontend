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
   phone: string;
}

export interface UserSetting {
   membership: string;
   role: string;
   username: string;
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

// invitation
export interface Invitations {
   invitations: Invitation[];
}
export interface Invitation {
   _id: string;
   groom: Groom | null;
   bride: Bride | null;
   websiteUrl: string;
   dueDateActive: Date;
   theme: string | null;
   events: Event[] | null;
   guests: Guest[] | null;
   pricingCategory: string;
}
export interface Groom {
   id: string;
   fullName: string;
   nickName: string;
   childOrder: number;
   fatherName: string;
   motherName: string;
   address: string;
   photo: string;
   socialMedia: SocialMedia;
}
export interface Bride {
   id: string;
   fullName: string;
   nickName: string;
   childOrder: number;
   fatherName: string;
   motherName: string;
   address: string;
   photo: string;
   socialMedia: SocialMedia;
}
interface SocialMedia {
   facebook: string;
   instagram: string;
   twitter: string;
   tiktok: string;
}
export interface Guest {
   fullName: string;
   category: string;
}

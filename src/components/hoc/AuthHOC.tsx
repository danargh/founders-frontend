import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserSetting } from "@/interfaces";
import { useValidateToken } from "@/api/auth";
import { CenterLoader, FullScreenLoader, Loader } from "@/components/ui/Loader";
import { useUserSlice } from "@/store/store";
import { useStore } from "@/hooks";

export interface AuthHOCProps {
   userData: UserSetting;
}

// function AuthHOC<P extends AuthHOCProps>(Component: React.FC<P>): React.FC<P> {
//    const AuthenticatedComponent: React.FC<P> = (props: P) => {
//       const { status: useValidateTokenStatus, data: userResponseData } = useValidateToken();
//       const [setUser] = useUserSlice((state) => [state.setUser, state.user]);
//       const user = useStore(useUserSlice, (state) => state.user);
//       const router = useRouter();

//       useEffect(() => {
//          if (useValidateTokenStatus === "error") {
//             router.push("/login");
//          } else if (useValidateTokenStatus === "success") {
//             setUser(userResponseData.data);
//          }
//       }, [router, useValidateTokenStatus, setUser, userResponseData]);

//       if (useValidateTokenStatus === "pending") {
//          return <CenterLoader />;
//       } else if (useValidateTokenStatus === "success") {
//          return <Component {...props} />;
//       }
//    };

//    return AuthenticatedComponent;
// }

function AuthHOC(Component: any) {
   const AuthenticatedComponent = (props: any) => {
      const { status: useValidateTokenStatus, data: userResponseData } = useValidateToken();
      const [setUser] = useUserSlice((state) => [state.setUser, state.user]);
      const user = useStore(useUserSlice, (state) => state.user);
      const router = useRouter();

      useEffect(() => {
         if (useValidateTokenStatus === "success") {
            setUser(userResponseData.data);
         } else if (useValidateTokenStatus === "error") {
            router.push("/login");
         }
      }, [router, useValidateTokenStatus, setUser, userResponseData]);

      if (useValidateTokenStatus === "pending") {
         return <CenterLoader />;
      } else if (useValidateTokenStatus === "success") {
         return <Component user={user} {...props} />;
      }
   };

   return AuthenticatedComponent;
}

// function AuthHOC<P extends object>(Component: React.ComponentType<P>): React.FC<P & AuthHOCProps> {
//    const AuthenticatedComponent: React.FC<P & AuthHOCProps> = ({ userData, ...props }: AuthHOCProps & P) => {
//       const { status: useValidateTokenStatus, data: userResponseData } = useValidateToken();
//       const [setUser] = useUserSlice((state) => [state.setUser, state.user]);
//       const user = useStore(useUserSlice, (state) => state.user);
//       const router = useRouter();

//       useEffect(() => {
//          if (useValidateTokenStatus === "error") {
//             router.push("/login");
//          } else if (useValidateTokenStatus === "success") {
//             setUser(userResponseData.data);
//          }
//       }, [router, useValidateTokenStatus, userData, setUser, userResponseData]);

//       if (useValidateTokenStatus === "pending") {
//          return <CenterLoader />;
//       } else if (useValidateTokenStatus === "success") {
//          return <Component {...(props as P)} userData={user} />;
//       }
//    };

//    return AuthenticatedComponent;
// }

export default AuthHOC;

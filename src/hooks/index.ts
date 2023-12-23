import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

// persist hydration
export const useStore = <T, F>(store: (callback: (state: T) => unknown) => unknown, callback: (state: T) => F) => {
   const result = store(callback) as F;
   const [data, setData] = useState<F>();

   useEffect(() => {
      setData(result);
   }, [result]);

   return data;
};

// get cookies token hooks
export const useToken = () => {
   const cookies = new Cookies();
   const [token, setToken] = useState(null);

   useEffect(() => {
      const getTokenFromCookies = () => {
         const cookieToken = cookies.get("userToken");
         setToken(cookieToken || null);
      };

      getTokenFromCookies();
   }, []);

   return token;
};

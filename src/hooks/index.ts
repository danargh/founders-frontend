import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

// persist side effect hooks
export const useStore = <T, F>(store: (callback: (state: T) => unknown) => unknown, callback: (state: T) => F) => {
   const result = store(callback) as F;
   const [data, setData] = useState<F>();

   useEffect(() => {
      setData(result);
   }, [result]);

   return data;
};

// cookies hooks
export const useCookies = (cookieNames: string[]) => {
   const universalCookie = new Cookies();
   const [cookies, setCookies] = useState(() => {
      const initialCookies: { [key: string]: string } = {};
      cookieNames.forEach((cookieName) => {
         initialCookies[cookieName] = universalCookie.get(cookieName);
      });
      return initialCookies;
   });

   const updateCookie = (name: string, value: string, options: { [key: string]: string }) => {
      // Mengupdate state dan cookie menggunakan setCookie dari js-cookie
      setCookies((prevCookies) => ({
         ...prevCookies,
         [name]: value,
      }));
      universalCookie.set(name, value, options);
   };

   const removeCookie = (name: string, options: { [key: string]: string }) => {
      // Menghapus state dan cookie menggunakan removeCookie dari js-cookie
      setCookies((prevCookies) => {
         const { [name]: removedCookie, ...restCookies } = prevCookies;
         return restCookies;
      });
      universalCookie.remove(name, options);
   };

   return {
      cookies,
      updateCookie,
      removeCookie,
   };
};

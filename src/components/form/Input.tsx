"use client";

import React, { FC, InputHTMLAttributes, useRef } from "react";
import { Eye } from "@/assets/icons/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string;
   label?: string;
   error?: string;
   register?: any;
   wrapperClass?: string;
   className?: string;
   type?: string;
}

export const Input: FC<InputProps> = ({ register, name, error, label, wrapperClass, type, ...rest }) => {
   const [passwordShown, setPasswordShown] = React.useState(false);

   return (
      <div>
         <div className={error ? "input__wrapper-error" : "input__wrapper"}>
            {label && (
               <label className="absolute" htmlFor={name}>
                  {label}
               </label>
            )}
            <div className="flex justify-between items-center">
               <input className="input__text" type={passwordShown ? "text" : type} aria-invalid={error ? "true" : "false"} {...register(name)} {...rest} autoComplete="off" />
               {type === "password" && (
                  <i
                     className="cursor-pointer"
                     onClick={() => {
                        setPasswordShown(!passwordShown);
                     }}
                  >
                     <Eye width="24" height="24" />
                  </i>
               )}
            </div>
         </div>
         {error && (
            <span role="alert" className="p-4 text-body-sm font-[400] text-orangeDarkSecondary-600">
               {error}
            </span>
         )}
      </div>
   );
};

"use client";

import React, { FC, InputHTMLAttributes, useRef } from "react";
import { EyeIcon } from "@/assets/icons/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string;
   label?: string;
   error?: string;
   register?: any;
   wrapperClass?: string;
   className?: string;
   type?: string;
   value?: string;
}

export const Input: FC<InputProps> = ({ register, name, className, error, label, wrapperClass, type, value, ...rest }) => {
   const [passwordShown, setPasswordShown] = React.useState(false);

   return (
      <div className={className}>
         <div className={error ? "input__wrapper-error" : "input__wrapper"}>
            {label && (
               <label className="absolute" htmlFor={name}>
                  {label}
               </label>
            )}
            <div className="flex justify-between items-end">
               <input className="input__text" id={name} value={value} type={passwordShown ? "text" : type} aria-invalid={error ? "true" : "false"} {...register(name)} {...rest} />
               {type === "password" && (
                  <i
                     className="cursor-pointer"
                     onClick={() => {
                        setPasswordShown(!passwordShown);
                     }}
                  >
                     <EyeIcon width="24" height="24" />
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

export const InputCheckbox: FC<InputProps> = ({ register, name, className, error, label, wrapperClass, type, ...rest }) => {
   return (
      <div className={className}>
         <div className="flex gap-x-2 items-start">
            <input className="mt-[6px] mr-2" id={name} type={type} aria-invalid={error ? "true" : "false"} {...register(name)} {...rest} />
            <label htmlFor={name}>{label}</label>
         </div>

         {error && (
            <span role="alert" className="p-4 text-body-sm font-[400] text-orangeDarkSecondary-600">
               {error}
            </span>
         )}
      </div>
   );
};

import React from "react";
import { SearchNormal } from "iconsax-react";
import { useState } from "react";

type InputFilterProps = {
   children: React.ReactNode;
   placeholder?: string;
   onSetInput?: (input: string) => void;
};

export function InputFilter({ children, placeholder, onSetInput }: InputFilterProps) {
   const [input, setInput] = useState<string>("");

   const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);

      if (onSetInput) {
         onSetInput(e.target.value);
      }
   };

   return (
      <div className="flex items-center gap-x-4 border border-primary-200 p-3 rounded-[32px]">
         {children}
         <input onChange={inputHandler} value={input} className="bg-primary-25 text-label-md" style={{ outline: "none" }} type="text" placeholder={placeholder} />
      </div>
   );
}

interface OptionFilterProps {
   children: React.ReactNode;
   options: Option[];
   onSetInput: (input: string) => void;
}
interface Option {
   value: string;
   label: string;
}

export function OptionFilter({ children, onSetInput, options }: OptionFilterProps) {
   const [input, setInput] = useState<string>("");

   const inputHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setInput(e.target.value);
      onSetInput(e.target.value);
   };

   return (
      <div className="flex items-center gap-x-1 border border-primary-200 p-3 rounded-[32px]">
         <select id="select-input" onChange={inputHandler} value={input} className="bg-primary-25 text-label-md" style={{ outline: "none" }}>
            {options.map((option, index) => (
               <option key={index} value={option.value}>
                  {option.label}
               </option>
            ))}
         </select>
         {/* {children} */}
      </div>
   );
}

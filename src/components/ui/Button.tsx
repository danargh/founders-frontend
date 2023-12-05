import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
   onClick: () => void;
   className: string;
   children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
   return (
      <button onClick={onClick} className={`${className}`}>
         {children}
      </button>
   );
};

interface LinkButtonProps {
   urlLocation: string;
   className: string;
   children: ReactNode;
}
export const LinkButton: React.FC<LinkButtonProps> = ({ urlLocation, className, children }) => {
   return (
      <Link href={urlLocation} className={className}>
         {children}
      </Link>
   );
};

interface SubmitButtonProps {
   className: string;
   children: ReactNode;
}
export const SubmitButton: React.FC<SubmitButtonProps> = ({ children, className }) => {
   return (
      <button type="submit" className={className}>
         {children}
      </button>
   );
};

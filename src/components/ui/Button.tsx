import { ReactNode } from "react";

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
      <a href={urlLocation} className={className}>
         {children}
      </a>
   );
};

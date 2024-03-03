import { AlertIcon } from "@/assets/icons/icons";

interface AlertProps {
   type: string;
   message: string;
}

export const Message: React.FC<AlertProps> = ({ message = "label", type }) => {
   if (type === "error") {
      return (
         <div className="flex gap-x-2 justify-start items-center w-full p-4 rounded-xl bg-orangeDarkSecondary-25">
            <i className=" w-4 md:w-5 h-4 md:h-5">
               <AlertIcon width="100%" height="100%" />
            </i>
            <p className=" text-body-md text-orangeDarkSecondary-600">{message}</p>
         </div>
      );
   }
};

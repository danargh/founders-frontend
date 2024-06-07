import React, { FC, ReactElement } from "react";
import { CloseCircle } from "iconsax-react";

interface ModalProps {
   isModal: boolean;
   onClose: (value: boolean) => void;
   children: ReactElement;
}

export default function Modal({ isModal, onClose, children }: ModalProps): ReturnType<FC> {
   const handleModal = () => {
      onClose(false);
   };

   return (
      <div className={`${"modal"} ${isModal ? "display-block p-4" : "display-none"}`}>
         <div className="modal-main p-4 gap-y-2 flex flex-col">
            <div className="flex justify-center items-center w-fit ml-auto">
               <CloseCircle onClick={handleModal} className="w-8 h-8 close cursor-pointer" />
            </div>
            {children}
         </div>
      </div>
   );
}

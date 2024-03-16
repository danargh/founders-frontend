"use client";
import { testimoniData } from "@/store/staticStore";
import Image from "next/image";
import { LinkButton } from "../ui/Button";
import { SimpleRightArrowIcon } from "@/assets/icons/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "@/hooks";
import { useStore } from "@/hooks";
import { useUserSlice } from "@/store/store";

const Profile: React.FC = () => {
   const user = useStore(useUserSlice, (state) => state.user);
   const [profileisOpen, setProfileIsOpen] = useState<boolean>(false);
   const { removeCookie } = useCookies(["userToken"]);
   const router = useRouter();

   // logout
   const logoutHandler = () => {
      removeCookie("userToken", { path: "/" });
      router.push("/login");
   };

   return (
      <>
         <button
            onClick={() => {
               setProfileIsOpen(!profileisOpen);
            }}
            className="flex justify-center items-center gap-x-2 ml-4 border border-primary-200 rounded-full p-2 text-label-md font-[600]"
         >
            <Image width={32} height={32} className="border border-[#DBD8EB] rounded-full object-cover w-8 h-8" src={testimoniData[0].imgMale} alt="avatar img" />
            <p>{user?.username}</p>
            <i className="md:mt-[2px] transition-all" style={{ rotate: profileisOpen ? "-90deg" : "90deg" }}>
               <SimpleRightArrowIcon width="24" height="24" />
            </i>
         </button>
         {profileisOpen && (
            <div className="absolute top-[88px] right-6 flex flex-col text-body-md font-[500] border border-primary-200 bg-primary-25 p-3 rounded-2xl">
               <LinkButton urlLocation="/dashboard/template" className="items-center justify-start flex py-2 px-3">
                  List Undangan
               </LinkButton>
               <button className="items-center justify-start flex py-2 px-3 text-orangeDarkSecondary-700" onClick={logoutHandler}>
                  Logout
               </button>
            </div>
         )}
      </>
   );
};

export default Profile;

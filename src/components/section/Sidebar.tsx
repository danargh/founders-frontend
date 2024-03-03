// Sidebar section for user dashboard

import LogoNavbar from "../ui/LogoNavbar";
import { CalendarIcon } from "../../assets/icons/icons";
import { useUserSlice } from "../../store/store";
import { useCookies, useStore } from "../../hooks";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
   const user = useStore(useUserSlice, (state) => state.user);
   const { removeCookie } = useCookies(["userToken"]);
   const router = useRouter();

   // logout
   const logoutHandler = () => {
      removeCookie("userToken", { path: "/" });
      router.push("/login");
   };

   return (
      <nav className="basis-2/12">
         <CalendarIcon width="20" height="20" />
         <button onClick={logoutHandler}>Logout</button>
      </nav>
   );
};

export default Sidebar;

import Link from "next/link";

const LogoNavbar: React.FC = () => {
   return (
      <div className="flex items-center justify-center md:justify-start py-6 ">
         <Link href="/" className="logo__primary">
            POLOKRAMI
         </Link>
      </div>
   );
};

export default LogoNavbar;

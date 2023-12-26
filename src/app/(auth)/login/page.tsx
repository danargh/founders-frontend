"use client";

import { useEffect } from "react";
import LogoNavbar from "@/components/ui/LogoNavbar";
import { Input } from "@/components/form/Input";
import { useForm } from "react-hook-form";
import { SubmitButton } from "@/components/ui/Button";
import { button } from "@/app/variants";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "@/components/form/Form";
import { LinkButton } from "@/components/ui/Button";
import { LoginUser } from "@/interfaces";
import { useLogin, useValidateToken } from "@/api/auth";
import { useRouter } from "next/navigation";
import { CenterLoader, Loader } from "@/components/ui/Loader";
import { Message } from "@/components/ui/Message";

// validation
const EmailSchema = yup.object().shape({
   email: yup.string().email("Enter a valid email").required("Email is required"),
   password: yup.string().max(32, "Max password length is 32").required("Password is required"),
});

const Login: React.FC = () => {
   const router = useRouter();
   const { data: successResponse, mutate: mutateLogin, status: useLoginStatus, isPending, error: errorReponse } = useLogin();
   const { data, status: useValidateTokenStatus } = useValidateToken();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(EmailSchema) });

   const onSubmit = (data: LoginUser, event: React.FormEvent) => {
      event.preventDefault();
      mutateLogin(data);
   };

   useEffect(() => {
      if (useLoginStatus === "success") {
         router.push("/dashboard");
         console.log("kok running1");
      }
      if (useValidateTokenStatus === "success") {
         router.push("/dashboard");
         console.log(data);
         console.log("kok running2");
      }
   }, [useLoginStatus, useValidateTokenStatus]);

   if (useValidateTokenStatus === "pending") {
      return <CenterLoader />;
   }
   if (useValidateTokenStatus === "error") {
      return (
         <div className="responsive__container">
            <LogoNavbar />
            <div className="flex gap-x-[72px]">
               <img className="hidden w-[564px] xl:flex object-contain object-top" src="/images/login-img.jpg" alt="login image" />
               <div className="flex flex-col justify-center items-center gap-y-4 mx-auto w-[424px] xl:w-full">
                  <h2 className=" text-display-md mb-4 font-[400] font-Lora w-full text-center">Masuk ke Polokrami</h2>
                  {errorReponse?.status === "Failed" && <Message type="error" message={errorReponse.message} />}
                  <Form buttonLabel="Change Email" register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} className="flex flex-col gap-y-4 w-full">
                     <Input name="email" type="email" label="Email" placeholder="email@example.com" error={errors.email?.message} autoFocus />
                     <Input name="password" type="password" label="Password" placeholder="(minimal 8 karakter)" error={errors.password?.message} />
                     <Link href="#" className=" text__link w-fit ml-auto text-right">
                        Lupa password?
                     </Link>
                     <SubmitButton isLoading={isPending} className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full`}>
                        Masuk
                     </SubmitButton>
                  </Form>
                  <div className="flex items-center w-full">
                     <hr className="or__line" />
                     <p className=" p-2 text-label-sm font-[600] text-primary-600">Atau</p>
                     <hr className="or__line" />
                  </div>
                  <LinkButton urlLocation="#" className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full`}>
                     <img src="/icons/google.png" alt="google icon" />
                     Masuk dengan Google
                  </LinkButton>
                  <p className="font-[400] text-label-lg text-center">
                     Belum punya akun?{" "}
                     <Link href="/register" className="text__link">
                        Daftar
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      );
   }
};

export default Login;

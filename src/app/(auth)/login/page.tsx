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
import { useLogin, useValidateToken, useLoginGoogle } from "@/api/auth";
import { useRouter } from "next/navigation";
import { CenterLoader, FullScreenLoader, Loader } from "@/components/ui/Loader";
import { Message } from "@/components/ui/Message";
import AuthHOC from "@/components/hoc/AuthHOC";
import config from "@/config";

// validation
const LoginSchema = yup.object().shape({
   email: yup.string().email("Enter a valid email").required("Email is required"),
   password: yup.string().max(32, "Max password length is 32").required("Password is required"),
});

const Login: React.FC = () => {
   const router = useRouter();
   const { data: successResponse, mutate: mutateLogin, status: useLoginStatus, isPending, error: errorReponse } = useLogin();
   const { data: postLoginGoogleData, status: postLoginGoogleStatus, error: postLoginGoogleError, mutateAsync: mutatePostLoginGoogle } = useLoginGoogle();
   const { data, status: useValidateTokenStatus } = useValidateToken();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(LoginSchema) });

   const onSubmit = (data: LoginUser, event: React.FormEvent) => {
      event.preventDefault();
      mutateLogin(data);
   };

   const handleLoginGoogle = () => {
      mutatePostLoginGoogle();
   };

   useEffect(() => {
      if (useLoginStatus === "success") {
         router.push("/invitation");
      }
      if (useValidateTokenStatus === "success") {
         router.push("/invitation");
      }
   }, [router, useLoginStatus, successResponse, useValidateTokenStatus, data]);

   if (useValidateTokenStatus === "pending") {
      return <CenterLoader />;
   }

   return (
      <div className="responsive__container">
         <LogoNavbar />
         <div className="flex gap-x-[72px] lg:max-w-[480px] sm:w-full mx-auto">
            {/* <img className="hidden w-[564px] xl:flex object-contain object-top" src="/images/login-img.jpg" alt="login image" /> */}
            <div className="flex flex-col justify-center items-center gap-y-4 mx-auto w-[424px] xl:w-full">
               <h2 className=" text-display-md mb-4 font-[400] font-Lora w-full text-center">Masuk ke Polokrami</h2>
               {errorReponse?.status === "Failed" && <Message type="error" message={errorReponse.userMessage || errorReponse.message} />}
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
               <form className="w-full" action={`${config.BASE_URL}/auth/google`} method="get">
                  <button type="submit" className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full`}>
                     <img src="/icons/google.png" alt="google icon" />
                     Masuk dengan Google
                  </button>
               </form>
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
};

export default Login;

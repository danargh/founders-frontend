"use client";

import { useEffect } from "react";
import LogoNavbar from "@/components/ui/LogoNavbar";
import { Input, InputCheckbox } from "@/components/form/Input";
import { useForm } from "react-hook-form";
import { SubmitButton } from "@/components/ui/Button";
import { button } from "@/app/variants";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "@/components/form/Form";
import { LinkButton } from "@/components/ui/Button";
import { LoginUser, User } from "@/interfaces";
import { useLogin, useRegister, useValidateToken } from "@/api/auth";
import { useRouter } from "next/navigation";
import { CenterLoader, Loader } from "@/components/ui/Loader";
import { Message } from "@/components/ui/Message";

// validation
const RegisterSchema = yup.object().shape({
   email: yup.string().email("Enter a valid email").required("Email is required"),
   username: yup.string().required("Username is required"),
   phone: yup.string().required("Phone is required"),
   password: yup.string().min(8, "Minimal 8 karakter").required("Password is required"),
   repeatPassword: yup.string().oneOf([yup.ref("password"), undefined], "Passwords must match"),
   terms: yup.boolean().oneOf([true], "Anda harus menyetujui syarat dan ketentuan"),
});

const Register: React.FC = () => {
   const router = useRouter();
   const { data: successResponse, mutate: mutateRegister, status: useRegisterStatus, isPending, error: errorReponse } = useRegister();
   const { data, status: useValidateTokenStatus } = useValidateToken();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(RegisterSchema) });

   const onSubmit = (data: User, event: React.FormEvent) => {
      event.preventDefault();

      mutateRegister(data);
   };

   useEffect(() => {
      if (useRegisterStatus === "success") {
         router.push("/invitation");
      }
      if (useValidateTokenStatus === "success") {
         router.push("/invitation");
      }
   }, [useRegisterStatus, useValidateTokenStatus, router]);

   if (useValidateTokenStatus === "pending") {
      return <CenterLoader />;
   }
   if (useValidateTokenStatus === "error") {
      return (
         <div className="responsive__container">
            <LogoNavbar />
            <div className="flex gap-x-[72px] lg:max-w-[480px] sm:w-full mx-auto">
               {/* <img className="hidden w-[564px] xl:flex object-contain object-top" src="/images/login-img.jpg" alt="login image" /> */}
               <div className="flex flex-col justify-center items-center gap-y-4 mx-auto">
                  <h2 className=" text-display-md mb-4 font-[400] font-Lora w-full text-center">Daftar</h2>
                  {errorReponse?.status === "Failed" && <Message type="error" message={errorReponse.message} />}
                  <Form buttonLabel="Change Email" register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} className=" grid grid-cols-2 gap-4 w-full">
                     <Input className="col-span-2" name="username" type="text" label="Username" placeholder="Username" error={errors.username?.message} autoFocus />
                     <Input className="col-span-2" name="email" type="email" label="Email" placeholder="email@example.com" error={errors.email?.message} />
                     <Input className="col-span-2" name="phone" type="tel" label="Whatsapp" placeholder="Nomor whatsapp" error={errors.phone?.message} />
                     <Input className="col-span-2" name="password" type="password" label="Password" placeholder="(minimal 8 karakter)" error={errors.password?.message} />
                     <Input className="col-span-2" name="repeatPassword" type="password" label="Ulangi Password" placeholder="(minimal 8 karakter)" error={errors.repeatPassword?.message} />
                     <InputCheckbox className="col-span-2" name="terms" type="checkbox" label="Dengan ini saya setuju dengan syarat dan ketentuan penggunaan Polokrami" error={errors.terms?.message} />

                     <SubmitButton isLoading={isPending} className={`${button({ primary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full col-span-2`}>
                        Daftar
                     </SubmitButton>
                  </Form>
                  <div className="flex items-center w-full">
                     <hr className="or__line" />
                     <p className=" p-2 text-label-sm font-[600] text-primary-600">Atau</p>
                     <hr className="or__line" />
                  </div>
                  <LinkButton urlLocation="#" className={`${button({ tertiary: "gray", size: { initial: "mb_lg", md: "md", xl: "lg" } })} w-full`}>
                     <img src="/icons/google.png" alt="google icon" />
                     Daftar dengan Google
                  </LinkButton>
                  <p className="font-[400] text-label-lg text-center">
                     Sudah punya akun?{" "}
                     <Link href="/login" className="text__link">
                        Login
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      );
   }
};

export default Register;

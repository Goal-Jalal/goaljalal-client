"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import style from "./signup.module.css";
import { useSession } from "next-auth/react";

type SignUpForm = {
  name: string;
  birthDate: string;
};

export default function SignUp() {
  const { data: session } = useSession();
  console.log(session);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpForm>();

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log("data", data);
  };

  return (
    <main className={style.main}>
      <div className={style.title}>
        <span>골잘알</span> 가입
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.formItem}>
          <label>이름</label>
          <input placeholder="이름" {...register("name", { required: true })} />
        </div>
        <div className={style.formItem}>
          <label>생년월일</label>
          <input
            placeholder="YYYY-MM-DD"
            {...register("birthDate", { required: true })}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </main>
  );
}

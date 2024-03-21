"use client";
import { signIn } from "next-auth/react";

import style from "./login.module.css";

export default function Login() {
  const onClick = async () => {
    await signIn("kakao", {
      redirect: true,
      callbackUrl: "/signup",
    });
  };

  return (
    <main className={style.main}>
      <p>
        나도 골잘알에선 선수?
        <span>GOAL 잘알</span>
      </p>
      <div className={style.kakao} onClick={onClick}>
        카카오 로그인
      </div>
    </main>
  );
}

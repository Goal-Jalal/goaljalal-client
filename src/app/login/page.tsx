"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import style from "./login.module.css";

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

export default function Login() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  useEffect(() => {
    if (code) {
      console.log(code);
      // TODO:: code를 서버로 보내서 토큰을 받아오기
      // 받아온 토큰으로 유저 정보 가져오기 및 회원가입 여부 판단 리다이렉트
    }
  }, [code]);

  return (
    <main className={style.main}>
      <p>
        나도 골잘알에선 선수?
        <span>GOAL 잘알</span>
      </p>
      <div className={style.kakao} onClick={handleLogin}>
        카카오 로그인
      </div>
    </main>
  );
}

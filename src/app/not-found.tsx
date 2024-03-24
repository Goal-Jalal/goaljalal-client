"use client";

import { NextPage } from "next";
import Link from "next/link";

import Lottie from "react-lottie-player";

import notFound from "../../public/not-found.json";

import style from "./not-found.module.css";

const NotFount: NextPage = () => {
  return (
    <main className={style.main}>
      <div className={style.title}>이 페이지는 존재하지 않습니다</div>
      <Lottie
        loop
        animationData={notFound}
        play
        style={{ width: 300, height: 300 }}
      />

      <Link href="/">
        <div className={style.btn}>홈으로</div>
      </Link>
    </main>
  );
};

export default NotFount;

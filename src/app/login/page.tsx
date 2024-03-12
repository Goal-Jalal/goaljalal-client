import style from "./login.module.css";

export default function Login() {
  return (
    <main className={style.main}>
      <p>
        나도 골잘알에선 선수?
        <span>GOAL 잘알</span>
      </p>
      <div className={style.kakao}>카카오 로그인</div>
    </main>
  );
}

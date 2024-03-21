import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { cookies } from "next/headers";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log("KAKAO LOGIN###", user);
      // TODO:: 카카오톡 로그인 후 서버에 유저 정보 저장
      // const { name, email, image } = user;

      // const response = await fetch('http://localhost:8000/auth/login', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     name,
      //     email,
      //     image,
      //   }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      // if (!response.ok) return false;

      // const data = await response.json();

      // const { accessToken, refreshToken } = data;

      // cookies().set('accessToken', accessToken);
      // cookies().set('refreshToken', refreshToken);

      return true;
    },
  },
  secret: process.env.AUTH_SECRET,
});

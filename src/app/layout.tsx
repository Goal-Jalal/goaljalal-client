import type { Metadata } from "next";
import Image from "next/image";

import {
  FaAddressCard,
  FaFutbol,
  FaHouse,
  FaPeopleGroup,
  FaPerson,
} from "react-icons/fa6";

import { FooterIcon } from "@/components/FooterIcon";
import AuthSession from "@/components/AuthSession";

import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";
import styles from "./layout.module.css";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "골잘알",
  description: "풋살 모집 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={noto.className}>
        <AuthSession>
          <div className={styles.container}>
            <div className={styles.header}>
              <Image src={"/logo.png"} alt="logo" width={25} height={25} />
              <div>골잘알</div>
            </div>
            <div className={styles.content}>{children}</div>
            <div className={styles.footer}>
              <FooterIcon icon={<FaHouse />} text="홈" link="/" />
              <FooterIcon icon={<FaPeopleGroup />} text="클럽" link="/" />
              <FooterIcon icon={<FaFutbol />} text="매칭" link="/" />
              <FooterIcon icon={<FaPerson />} text="용병" link="/" />
              {/* TODO:: 로그인 여부에 따른 분기 처리 */}
              <FooterIcon
                icon={<FaAddressCard />}
                text="프로필"
                link="/login"
              />
            </div>
          </div>
        </AuthSession>
      </body>
    </html>
  );
}

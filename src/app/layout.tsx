import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className={styles.container}>
          <div className={styles.header}></div>
          <div className={styles.content}>{children}</div>
          <div className={styles.footer}></div>
        </div>
      </body>
    </html>
  );
}

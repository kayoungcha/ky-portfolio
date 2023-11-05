import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.scss";
import Footer from "@/footer/footer";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "차가영 포트폴리오",
  description: "안녕하세요. 프론트엔드 개발자 차가영 포트폴리오 페이지입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <div className="body-wrap">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

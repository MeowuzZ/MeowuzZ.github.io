import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "软件人的实践作品集",
  description: "软件工程毕业生的项目作品、学习成果与教学实践。",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "软件人的实践作品集",
    description: "把学习结果，做成看得见的作品。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

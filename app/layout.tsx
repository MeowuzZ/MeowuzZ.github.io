import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meowuzz.github.io"),
  title: "Meowu · 软件人的实践作品集",
  description: "软件工程毕业生的项目作品、学习成果与教学实践。",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Meowu · 软件人的实践作品集",
    description: "把学习结果，做成看得见的作品。",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Meowu 的软件实践作品集" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meowu · 软件人的实践作品集",
    description: "把学习结果，做成看得见的作品。",
    images: ["/og.png"],
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

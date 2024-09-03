import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "./_components/MainNav";
import ScrollToTopBtn from "./_components/buttons/ScrollToTopBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Todo App",
    template: "%s | Todo App",
  },
  description: "Todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-orange-100 via-sky-50 to-cyan-50`}
      >
        <div className="flex flex-col w-full max-w-screen-xl mx-auto md:flex-row h-screen md:overflow-hidden">
          <MainNav />
          <main
            id="main"
            className="flex w-full flex-col px-8 py-2 md:py-16 overflow-auto"
          >
            {children}
          </main>
        </div>
        <ScrollToTopBtn />
      </body>
    </html>
  );
}

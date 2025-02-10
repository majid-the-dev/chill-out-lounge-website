import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'animate.css';
import Head from "next/head";

// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700"],
// });

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chill Out Lounge",
  description: "Eat, Sip, Chill Out",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={"@/public/assets/chill-out-logo.png"} />
      </Head>
      <body className={lora.className}>
        <div className="w-full fixed top-0 z-[9999]">
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}

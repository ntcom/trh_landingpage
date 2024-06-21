import type { Metadata } from "next";
import "./styles/global.css";
import "./styles/app.css";
import Header from "./components/layouts/Header";
import { Poppins, Inter as FontSans } from "next/font/google";
import Footer from "./components/layouts/Footer";
import Provider from "./providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, fontSans.variable)} >
        <Provider>
          <Header />
          <div className="min-h-[calc(100vh-94px)]">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

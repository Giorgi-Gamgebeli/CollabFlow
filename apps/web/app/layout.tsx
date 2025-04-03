import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "./_context/DarkModeContext";
import { ActiveSectionContextProvider } from "./_context/ActiveSectionContext";
import ClientProviders from "./ClientProviders";
import { SessionProvider } from "next-auth/react";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700", "900"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--fontFamily_Poppins",
// });

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--fontFamily_Poppins",
});

export const metadata: Metadata = {
  title: "Pixel Sync | Your one and only tool for web design!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-gray-50`}>
        <ActiveSectionContextProvider>
          <DarkModeProvider>
            <SessionProvider>
              <ClientProviders>{children}</ClientProviders>
            </SessionProvider>
          </DarkModeProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

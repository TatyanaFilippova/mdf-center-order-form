import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

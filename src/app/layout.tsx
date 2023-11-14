import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import favicon from "/public/favicon.ico";
import StyledComponentsRegistry from "@/libs/registry";

const roboto400 = Roboto({ subsets: ["latin"], weight: "400" });
const roboto700 = Roboto({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={`${roboto400.className} ${roboto700.className}`}>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}

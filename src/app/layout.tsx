import { Inter } from "next/font/google";
import MainRootLayout from "@/layouts/MainRootLayout";
import "../styles/global.css";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatchat",
  description: "AI powered chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <MainRootLayout>{children}</MainRootLayout>
        </Providers>
      </body>
    </html>
  );
}

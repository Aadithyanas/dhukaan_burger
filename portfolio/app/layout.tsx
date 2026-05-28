import type { Metadata } from "next";
import { Inter, Anton, Carter_One, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const carter = Carter_One({
  variable: "--font-carter-next",
  weight: "400",
  subsets: ["latin"],
});

const luckiest = Luckiest_Guy({
  variable: "--font-luckiest-next",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rocky's | Best Burgers in Town",
  description: "Delicious fried chicken burgers and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${carter.variable} ${luckiest.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

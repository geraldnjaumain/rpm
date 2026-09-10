import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "leethe",
  description: "a software agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-full flex flex-col font-sans bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}

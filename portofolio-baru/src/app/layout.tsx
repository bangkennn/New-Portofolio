import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Saya",
  description: "Dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* overflow-x-hidden PENTING: Mencegah scroll ke samping */}
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="flex min-h-screen bg-[#0a0a0a]">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          {/* Ubah ml-72 jadi ml-64 (sesuai sidebar baru) */}
          {/* Ubah p-12 jadi p-8 atau p-4 di layar kecil agar tidak sempit */}
          <main className="flex-1 ml-64 p-8 md:p-12 w-full max-w-[calc(100vw-16rem)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
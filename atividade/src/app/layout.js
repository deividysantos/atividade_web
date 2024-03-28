import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Livros",
  description: "Atividade de cadastro de Livros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-4">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coopstar Express - Serviços de Moto Frete",
  description: "Serviço de entregas e coletas ágeis e seguras com mais de 9 anos de mercado. Atendimento 24h em São Paulo e Grande SP.",
  keywords: ["Moto Frete", "Entregas", "Sáo Paulo", "Coletas", "Delivery", "Transporte rápido"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Chatbot } from "@/components/Chatbot";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hampstead On-Demand | Premium Property Services | North West London",
  description: "North West London's trusted on-demand property service. Professional trades available instantly. Serving NW3, NW8, NW1, NW6, and surrounding areas since 2009.",
  keywords: "property maintenance North West London, plumber Hampstead, electrician NW3, emergency repairs, property services London",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${libreBaskerville.variable} font-body antialiased`}>
        {children}
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}

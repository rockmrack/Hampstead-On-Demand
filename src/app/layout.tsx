import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
  title: "Hampstead Maintenance | Premier Property Services | NW3, NW8, NW1, NW6",
  description: "Hampstead's premier property maintenance service since 2009. Professional trades available on-demand. Serving NW3, NW8, NW1, NW6 and surrounding areas. Plumbing, electrical, handyman, locksmith & more.",
  keywords: "property maintenance Hampstead, plumber NW3, electrician Hampstead, handyman NW8, locksmith NW1, emergency repairs Hampstead, property services North West London",
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
        <Toaster />
      </body>
    </html>
  );
}

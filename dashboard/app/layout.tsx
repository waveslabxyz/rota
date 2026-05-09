import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const firaCode = localFont({
  src: "../public/fonts/FiraCode-VariableFont_wght.ttf",
  variable: "--font-fira-code",
  weight: "300 700",
});

export const metadata: Metadata = {
  title: "Rota - Proxy Rotation Dashboard",
  description: "Intelligent proxy rotation and management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.variable} font-mono antialiased`}>
        <Script src="/runtime-config.js" strategy="beforeInteractive" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

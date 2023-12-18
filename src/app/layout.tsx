import { Toaster } from "react-hot-toast";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "@/styles/global.scss";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: { default: "Diagnosys AI", template: `%s | Diagnosys AI` },
  description:
    "Diagnosys AI is designed to alleviate the challenges of diagnostic uncertainty and efficiency that junior doctors frequently encounter. Our solution focuses on streamlining the diagnostic process, enhancing decision-making, and ultimately contributing to better patient outcomes.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Toaster />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            {/* @ts-ignore */}
            <Header />
            <main className="flex flex-col flex-1 background-gradient dark:background-gradient-dark">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

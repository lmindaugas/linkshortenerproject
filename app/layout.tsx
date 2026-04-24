import type { Metadata } from "next";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import "./globals.css";

/**
 * NOTE: CI for this repo runs in an environment where outbound network requests
 * can be blocked. `next/font/google` fetches fonts during `next build`, which
 * causes builds to fail when Google Fonts is unreachable.
 *
 * Using local fonts keeps builds deterministic and network-independent.
 */
const geistSans = localFont({
  src: "../public/fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LinkShort — URL Shortener",
  description: "Shorten URLs, track clicks, and manage all your links in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <header className="w-full border-b border-border bg-background/80 px-6 py-3 backdrop-blur">
            <nav className="mx-auto flex w-full max-w-5xl items-center justify-end gap-3">
              <Show when="signed-out">
                <SignInButton>
                  <Button variant="ghost">Sign in</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Sign up</Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </nav>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}

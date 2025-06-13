'use client';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          {children}

        </body>
      </html>
    </ClerkProvider>
  );
}

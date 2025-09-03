import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Company App",
  description: "Company internal management system",
};

// Professional: Pull version from environment (recommended)
const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "v1.0.0";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Professional: Meta tag for version */}
        <meta name="app-version" content={APP_VERSION} />
        {/* Professional: Hidden HTML comment */}
        <script
          dangerouslySetInnerHTML={{
            __html: `<!-- Version: ${APP_VERSION} -->`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Optional visible version label (small, unobtrusive) */}
        <div
          style={{
            position: "fixed",
            bottom: 5.5,
            right: 6,
            fontSize: 10,
            color: "#aaa",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        >
          
          {APP_VERSION}
        </div>
      </body>
    </html>
  );
}

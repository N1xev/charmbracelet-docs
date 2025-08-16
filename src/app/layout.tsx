import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: 'Charm - We make the command line glamorous',
  description: 'Building delightful developer tools and libraries that bring joy to terminal experiences. Open-source CLI tools including Bubble Tea TUI framework and Lip Gloss styling library.',
  
  openGraph: {
    title: 'Charm - We make the command line glamorous',
    description: 'Building delightful developer tools and libraries that bring joy to terminal experiences.',
    images: [
      {
        url: '/charm-banner.jpg', // Large banner image (1200x630)
        width: 1200,
        height: 630,
        alt: 'Charm - Beautiful CLI tools banner'
      }
    ],
    // Optional: Add site icon/thumbnail
    siteName: 'Charm',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image', // Shows large banner
    title: 'Charm - We make the command line glamorous',
    description: 'Building delightful developer tools and libraries that bring joy to terminal experiences.',
    images: ['/charm-banner.jpg'], // Same banner for Twitter
  },
  
  // Optional: Add a separate smaller thumbnail/icon
  icons: {
    icon: '/charmbracelet.png', // Small thumbnail (acts as site icon)
  }
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

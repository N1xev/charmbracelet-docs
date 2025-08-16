import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
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
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}

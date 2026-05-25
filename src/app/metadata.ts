import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IndieVibeStack - Build AI Products Without Code",
  description: "Discover tools, stacks, and guides to build real AI products without coding",
  metadataBase: new URL("https://indievibestack.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "IndieVibeStack - Build AI Products Without Code",
    description: "Your go-to hub for building AI products with zero coding experience",
    url: "https://indievibestack.vercel.app",
    siteName: "IndieVibeStack",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IndieVibeStack" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IndieVibeStack - Build AI Products Without Code",
    description: "Your go-to hub for building AI products with zero coding experience",
    images: ["/og-image.png"],
    creator: "@indievibestack",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true, 
      "max-video-preview": -1, 
      "max-image-preview": "large", 
      "max-snippet": -1 
    },
  },
  verification: { 
    google: "A8wskx8nC830MPRqphjcUgeBznTKVkFUWtD_EwGqEo8" 
  },
};
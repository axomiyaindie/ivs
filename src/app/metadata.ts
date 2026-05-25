import type { Metadata } from "next";

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "IndieVibeStack - Build AI Products Without Code",
    template: "%s | IndieVibeStack"
  },
  description: "Discover 500+ curated AI tools, project stacks, prompts, and guides. Build real AI products without coding. Join 10,000+ indie hackers.",
  
  // Keywords for SEO
  keywords: [
    "AI tools",
    "no-code AI",
    "AI directory",
    "indie hacking",
    "SaaS builder",
    "AI prompts",
    "project stacks",
    "AI guides",
    "build AI products",
    "no-code development",
    "AI for beginners",
    "AI resources"
  ].join(", "),
  
  // Canonical URL
  metadataBase: new URL("https://indievibestack.vercel.app"),
  alternates: {
    canonical: "/",
  },
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "IndieVibeStack - Build AI Products Without Code",
    description: "Discover 500+ curated AI tools, project stacks, prompts, and guides. Build real AI products without coding.",
    url: "https://indievibestack.vercel.app",
    siteName: "IndieVibeStack",
    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "IndieVibeStack - Build Real AI Products Without Code",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "IndieVibeStack - Build AI Products Without Code",
    description: "Discover 500+ curated AI tools, project stacks, prompts, and guides. Build real AI products without coding.",
    images: ["/images/og/twitter-image.png"],
    creator: "@rakibulio",
    site: "@indievibestack",
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
    shortcut: ["/icon.svg"],
  },
  
  // Verification
  verification: {
    google: "A8wskx8nC830MPRqphjcUgeBznTKVkFUWtD_EwGqEo8",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Additional SEO tags (authors moved here - outside openGraph)
  authors: [{ name: "Rakibul", url: "https://x.com/rakibulio" }],
  creator: "Rakibul",
  publisher: "IndieVibeStack",
  category: "technology",
  
  // Manifest for PWA
  manifest: "/manifest.json",
  
  // Other meta tags
  other: {
    "google-site-verification": "A8wskx8nC830MPRqphjcUgeBznTKVkFUWtD_EwGqEo8",
    "msapplication-TileColor": "#8B5CF6",
    "theme-color": "#8B5CF6",
  },
};
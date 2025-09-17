import { Inter } from "next/font/google";
import "./globals.css";

// Correct imports
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

/**
 * ✅ Global SEO metadata
 */
export const metadata = {
  title: {
    default: "MediLink | Smart Doctor Appointment System",
    template: "%s | MediLink",
  },
  description:
    "MediLink is your smart doctor appointment system. Book appointments, connect with doctors, and manage healthcare anytime, anywhere.",
  keywords: [
    "doctor appointment",
    "online healthcare",
    "MediLink",
    "telemedicine",
    "book doctor",
    "medical consultation",
    "online doctor consultation",
    "doctor appointment booking system",
    "virtual healthcare",
    "telemedicine platform",
    "hospital appointment booking",
    "clinic appointment system",
    "healthcare scheduling software",
    "online general physician consultation",
    "online pediatrician consultation",
    "mental health online consultation",
    "AI-powered healthcare app",
    "digital health solutions",
    "24/7 doctor consultation",
    "smart doctor appointment system",
    "online doctor consultation in India",
    "doctor appointment booking app in Mumbai",
  ],

  authors: [{ name: "Prajyot Gawade" }],
  creator: "Prajyot Gawade",
  publisher: "MediLink",
  metadataBase: new URL("https://medi-link-appointment.vercel.app/"), // change this to your real domain

  openGraph: {
    title: "MediLink | Smart Doctor Appointment System",
    description:
      "Book doctor appointments online with MediLink. Connect with trusted doctors anytime, anywhere.",
    url: "https://medi-link-appointment.vercel.app/",
    siteName: "MediLink",
    images: [
      {
        url: "/opengraph-image.png", // place this in /public
        width: 1200,
        height: 630,
        alt: "MediLink Doctor Appointment System",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MediLink | Smart Doctor Appointment System",
    description:
      "Book doctor appointments online with MediLink. Connect with doctors anytime, anywhere.",
    creator: "@your_twitter_handle",
    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* ✅ Header */}
            <Header />

            {/* ✅ Main Content */}
            <main className="min-h-screen">{children}</main>

            {/* ✅ Toast Notifications */}
            <Toaster richColors />

            {/* ✅ Footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>
                  © {new Date().getFullYear()} MediLink. All rights reserved.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

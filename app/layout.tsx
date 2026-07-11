import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coventrymobiletyres.co.uk"),
  title: {
    default: "Coventry Mobile Tyres | 24/7 Emergency Tyre Fitting",
    template: "%s | Coventry Mobile Tyres",
  },
  description:
    "24/7 emergency mobile tyre fitting in Coventry. Roadside tyre replacement, puncture repair and mobile tyre assistance at your home, workplace or roadside location.",
  keywords: [
    "Coventry mobile tyres",
    "mobile tyre fitting Coventry",
    "emergency tyre fitting Coventry",
    "24/7 mobile tyres Coventry",
    "mobile tyre fitter near me Coventry",
    "flat tyre help Coventry",
    "same day mobile tyre fitting Coventry",
    "roadside tyre replacement Coventry",
    "puncture repair Coventry",
    "mobile puncture repair Coventry",
    "tyre call out Coventry",
  ],
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Coventry Mobile Tyres | 24/7 Emergency Tyre Fitting",
    description:
      "Fast mobile tyre fitting, puncture repair and roadside tyre assistance across Coventry and nearby areas.",
    url: "https://coventrymobiletyres.co.uk",
    siteName: "Coventry Mobile Tyres",
    images: [
      {
        url: "/images/coventry-poster.jpeg",
        width: 1200,
        height: 630,
        alt: "Coventry Mobile Tyres emergency mobile tyre fitting",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coventry Mobile Tyres | Emergency Tyre Response",
    description:
      "Fast mobile tyre fitting, puncture repair and roadside tyre help across Coventry.",
    images: ["/images/coventry-poster.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}

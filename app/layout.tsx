import type { Metadata } from "next";
import { Lora } from "next/font/google";

import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "PT Chemkit Multi Guna - Industri Reagen & Rapid Test Kit Indonesia",
  description:
    "Supplier terpercaya rapid test kit kimia untuk keamanan pangan. Produk berkualitas tinggi untuk laboratorium, industri, dan instansi pemerintah di seluruh Indonesia. Dipercaya oleh 145+ pelanggan.",
  keywords: [
    "rapid test kit",
    "reagen kimia",
    "keamanan pangan",
    "test kit formalin",
    "test kit boraks",
    "laboratorium indonesia",
    "supplier kimia",
    "chemkit",
    "pengujian makanan",
    "food safety",
  ],
  authors: [{ name: "PT Chemkit Multi Guna" }],
  creator: "PT Chemkit Multi Guna",
  publisher: "PT Chemkit Multi Guna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chemkit.co.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PT Chemkit Multi Guna - Industri Reagen & Rapid Test Kit Indonesia",
    description:
      "Supplier terpercaya rapid test kit kimia untuk keamanan pangan. Produk berkualitas tinggi untuk laboratorium, industri, dan instansi pemerintah di seluruh Indonesia.",
    url: "https://chemkit.co.id",
    siteName: "PT Chemkit Multi Guna",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Chemkit Multi Guna - Rapid Test Kit Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Chemkit Multi Guna - Industri Reagen & Rapid Test Kit Indonesia",
    description:
      "Supplier terpercaya rapid test kit kimia untuk keamanan pangan.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PT Chemkit Multi Guna",
              description:
                "Industri reagen dan rapid test kit untuk keamanan pangan Indonesia",
              url: "https://chemkit.co.id",
              logo: "https://chemkit.co.id/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-852-8220-8799",
                contactType: "Customer Service",
                availableLanguage: ["Indonesian", "English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Serua Indah VI, Serua Residence Blok A1-B1",
                addressLocality: "Pamulang Timur",
                addressRegion: "Tangerang Selatan",
                postalCode: "15417",
                addressCountry: "ID",
              },
              sameAs: [
                "https://www.linkedin.com/company/pt-chemkit-multi-guna",
                "https://www.instagram.com/chemkit_indonesia",
              ],
            }),
          }}
        />
      </head>
      <body className={`${lora.className} antialiased`}>
        <noscript>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              background: "#ff6b6b",
              color: "white",
              padding: "10px",
              textAlign: "center",
              zIndex: 9999,
            }}
          >
            Website ini memerlukan JavaScript untuk berfungsi optimal. Mohon
            aktifkan JavaScript di browser Anda.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}

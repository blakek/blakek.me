import Head from "next/head";
import type React from "react";
import {
  EB_Garamond,
  Playfair_Display,
  JetBrains_Mono,
} from "next/font/google";

export interface BasicTemplateProps {
  children: React.ReactNode;
  keywords?: string[];
  metaDescription?: string;
  noIndex?: boolean;
  socialMediaImage?: string;
  title?: string;
}

const bodyFont = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
});

const headerFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-header",
});

const codeFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export function BasicLayout({
  children,
  keywords = [],
  metaDescription,
  socialMediaImage,
  title,
  noIndex = false,
}: BasicTemplateProps) {
  const metaKeywords = keywords.join(",");

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={socialMediaImage} />
        {noIndex && <meta name="robots" content="noindex" />}
      </Head>

      <div
        className={`${bodyFont.variable} ${headerFont.variable} ${codeFont.variable}`}
      >
        <main>{children}</main>
      </div>
    </>
  );
}

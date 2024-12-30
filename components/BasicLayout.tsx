import Head from "next/head";
import type React from "react";

export interface BasicTemplateProps {
  children: React.ReactNode;
  keywords?: string[];
  metaDescription?: string;
  noIndex?: boolean;
  socialMediaImage?: string;
  title?: string;
}

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

      <main>{children}</main>
    </>
  );
}

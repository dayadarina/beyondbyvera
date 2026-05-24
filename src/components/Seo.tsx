import { Helmet } from "react-helmet-async";

const SITE_URL = "https://beyondbyvera-journal.com";
const SITE_NAME = "Beyond by Vera Journal";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
  };
  structuredData?: object;
};

export default function Seo({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  article,
  structuredData,
}: SeoProps) {
  const full = `${title} — ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Article-specific OG */}
      {article && <meta property="article:published_time" content={article.publishedTime} />}
      {article?.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
      {article?.author && <meta property="article:author" content={article.author} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@beyondbyvera" />

      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

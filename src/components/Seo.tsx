import { Helmet } from "react-helmet-async";

export default function Seo({ title, description }: { title: string; description: string }) {
  const full = `${title} — Beyond by Vera`;
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

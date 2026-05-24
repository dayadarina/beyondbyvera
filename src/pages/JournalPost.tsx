import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { posts } from "../data/posts";

const SITE_URL = "https://beyondbyvera-journal.com";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderBody(body: string) {
  const blocks = body.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    const t = block.trim();
    if (t.startsWith("## ")) {
      return <h2 key={i}>{t.slice(3)}</h2>;
    }
    if (t.startsWith("> ")) {
      return <blockquote key={i}>{t.slice(2)}</blockquote>;
    }
    return <p key={i}>{t}</p>;
  });
}

export default function JournalPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="px-6 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Not found</h1>
        <Link to="/journal" className="text-terracotta">← Back to The Journal</Link>
      </div>
    );
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "url": `${SITE_URL}/journal/${post.slug}`,
    "image": post.heroImage || `${SITE_URL}/og-default.jpg`,
    "author": {
      "@type": "Organization",
      "name": "Beyond by Vera",
      "url": "https://beyondbyvera.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Beyond by Vera Journal",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/favicon.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/journal/${post.slug}`
    }
  };

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={`/journal/${post.slug}`}
        ogImage={post.heroImage || undefined}
        type="article"
        article={{ publishedTime: post.date, author: "Beyond by Vera" }}
        structuredData={articleStructuredData}
      />

      <article>
        <header className="px-6 pt-12 md:pt-20 pb-10 max-w-prose mx-auto text-center">
          <div className="small-caps text-charcoal/60 mb-4">
            {formatDate(post.date)} · {post.readTime}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6">
            {post.title}
          </h1>
          <p className="text-charcoal/75 text-lg leading-relaxed">{post.excerpt}</p>
        </header>

        <div className="px-6 py-14 md:py-20">
          <div className="max-w-prose mx-auto prose-editorial">
            {renderBody(post.body)}
            <p className="mt-10 italic">
              <a
                href="https://beyondbyvera.com"
                target="_blank"
                rel="noopener"
                className="text-terracotta hover:underline"
              >
                Explore the collection at beyondbyvera.com ↗
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-line/70 px-6 py-12 text-center">
          <Link to="/journal" className="text-sm text-charcoal/70 hover:text-terracotta">
            ← Back to The Journal
          </Link>
        </div>
      </article>
    </>
  );
}

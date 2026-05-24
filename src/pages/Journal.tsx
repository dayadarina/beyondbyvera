import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { posts } from "../data/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Journal() {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <>
      <Seo
        title="The Journal"
        description="Essays on wearable prints, the moments that call for them, and the women who wear them."
        canonical="/journal"
      />

      <section className="px-6 pt-16 pb-12 md:pt-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-5">The Journal</h1>
          <p className="text-charcoal/75 text-lg max-w-2xl mx-auto leading-relaxed">
            On the art of wearable prints, the moments that call for them, and the women who wear them.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sorted.map((p) => (
            <Link key={p.slug} to={`/journal/${p.slug}`} className="group block">
              <div className="small-caps text-charcoal/60 mb-2">{formatDate(p.date)} · {p.readTime}</div>
              <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-2 group-hover:text-terracotta transition-colors">
                {p.title}
              </h2>
              <p className="text-charcoal/75 leading-relaxed text-sm line-clamp-2 mb-2">
                {p.excerpt}
              </p>
              <span className="text-sm text-terracotta">Read more →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

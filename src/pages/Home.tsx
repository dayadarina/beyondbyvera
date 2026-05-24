import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/reviews";
import { posts } from "../data/posts";

export default function Home() {
  const featured = reviews.filter((r) => r.featured).slice(0, 6);
  const latestPosts = [...posts]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <Seo
        title="Stories from women who wear Vera"
        description="A journal of reviews, reflections, and the moments these pieces were made for. Beyond by Vera reviews and editorial journal."
      />

      <section className="px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-7">
            Stories from women<br className="hidden md:block" /> who wear Vera
          </h1>
          <p className="text-lg md:text-xl text-charcoal/75 max-w-2xl mx-auto leading-relaxed">
            A journal of reviews, reflections, and the moments these pieces were made for.
          </p>
          <div className="mt-10">
            <Link
              to="/reviews"
              className="inline-block border border-charcoal text-charcoal px-8 py-3 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-ivory transition-colors"
            >
              Read the reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line/70 bg-white/30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 small-caps text-charcoal/70 text-center">
          <span>4.8 Average</span>
          <span className="text-line">·</span>
          <span>+2,898 Reviews · 150 Shared</span>
          <span className="text-line">·</span>
          <span>96% Would Recommend</span>
          <span className="text-line">·</span>
          <span>Verified Sustainability Leader</span>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-4xl md:text-5xl">Recent reflections</h2>
            <Link to="/reviews" className="hidden md:inline text-sm text-charcoal/70 hover:text-terracotta">
              All 150 reviews →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
          <div className="md:hidden mt-8 text-center">
            <Link to="/reviews" className="text-sm text-charcoal/70 hover:text-terracotta">
              All 150 reviews →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white/40 border-y border-line/70 px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-4xl md:text-5xl">From the journal</h2>
            <Link to="/journal" className="hidden md:inline text-sm text-charcoal/70 hover:text-terracotta">
              All essays →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((p) => (
              <Link key={p.slug} to={`/journal/${p.slug}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden mb-4 bg-line">
                  <img
                    src={p.heroImage}
                    alt={p.heroImageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="small-caps text-charcoal/60 mb-2">{p.readTime}</div>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-2 group-hover:text-terracotta transition-colors">
                  {p.title}
                </h3>
                <p className="text-charcoal/75 leading-relaxed text-sm mb-3 line-clamp-2">
                  {p.excerpt}
                </p>
                <span className="text-sm text-terracotta">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-4xl leading-snug text-charcoal/90 mb-10">
            "Each print begins as a hand-drawn artwork. Discover the world of Beyond by Vera."
          </p>
          <a
            href="https://beyondbyvera.com"
            target="_blank"
            rel="noopener"
            className="inline-block border border-terracotta text-terracotta px-8 py-3 text-sm tracking-widest uppercase hover:bg-terracotta hover:text-ivory transition-colors"
          >
            Explore the collection ↗
          </a>
        </div>
      </section>
    </>
  );
}

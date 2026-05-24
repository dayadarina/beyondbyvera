import { useMemo, useState } from "react";
import Seo from "../components/Seo";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/reviews";

const OCCASIONS = [
  "All",
  "Derby Day",
  "Resort & Travel",
  "Wedding Guest",
  "Mother of the Bride",
  "Garden Luncheon",
  "Gala",
  "Everyday",
] as const;

const RATINGS = ["All", "5★", "4★", "3★+"] as const;
const SORTS = ["Most recent", "Highest rated", "Most helpful"] as const;
const PAGE_SIZE = 24;

export default function Reviews() {
  const [rating, setRating] = useState<(typeof RATINGS)[number]>("All");
  const [occasion, setOccasion] = useState<string>("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Most recent");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let r = [...reviews];
    if (rating === "5★") r = r.filter((x) => x.rating === 5);
    else if (rating === "4★") r = r.filter((x) => x.rating === 4);
    else if (rating === "3★+") r = r.filter((x) => x.rating >= 3);
    if (occasion !== "All") r = r.filter((x) => x.occasion === occasion);

    if (sort === "Most recent") r.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    else if (sort === "Highest rated") r.sort((a, b) => b.rating - a.rating || +new Date(b.date) - +new Date(a.date));
    else r.sort((a, b) => b.helpful - a.helpful);
    return r;
  }, [rating, occasion, sort]);

  const shown = filtered.slice(0, visible);

  function selectClass() {
    return "bg-transparent border border-charcoal/30 text-sm px-3 py-2 focus:outline-none focus:border-terracotta";
  }

  return (
    <>
      <Seo
        title="Reviews"
        description="All 150 verified reviews of Beyond by Vera pieces — filterable by rating and occasion."
        canonical="/reviews"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ReviewNewsArticle",
          "name": "Beyond by Vera Reviews",
          "description": "Verified customer reviews of Beyond by Vera pieces.",
          "url": "https://beyondbyvera-journal.com/reviews",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "2898"
          },
          "itemReviewed": {
            "@type": "Brand",
            "name": "Beyond by Vera",
            "url": "https://beyondbyvera.com"
          }
        }}
      />

      <section className="px-6 pt-16 pb-10 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-5">The Reviews</h1>
          <p className="text-charcoal/75 text-lg max-w-2xl mx-auto leading-relaxed">
            One hundred and fifty women, in their own words, on the moments these pieces have been with them.
          </p>
        </div>
      </section>

      <section className="px-6 pb-6">
        <div className="max-w-6xl mx-auto border-y border-line/70 py-5 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <label className="small-caps text-charcoal/60">Rating</label>
            <select className={selectClass()} value={rating} onChange={(e) => { setRating(e.target.value as any); setVisible(PAGE_SIZE); }}>
              {RATINGS.map((r) => <option key={r}>{r}</option>)}
            </select>
            <label className="small-caps text-charcoal/60 ml-2">Occasion</label>
            <select className={selectClass()} value={occasion} onChange={(e) => { setOccasion(e.target.value); setVisible(PAGE_SIZE); }}>
              {OCCASIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="small-caps text-charcoal/60">Sort</label>
            <select className={selectClass()} value={sort} onChange={(e) => setSort(e.target.value as any)}>
              {SORTS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-4 text-sm text-muted">
          Showing {Math.min(visible, filtered.length)} of {filtered.length} reviews
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>

        {visible < filtered.length && (
          <div className="max-w-6xl mx-auto text-center mt-14">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-block border border-charcoal text-charcoal px-8 py-3 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-ivory transition-colors"
            >
              Load more reviews
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">No reviews match those filters.</p>
        )}
      </section>
    </>
  );
}

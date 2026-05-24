import Stars from "./Stars";
import type { Review } from "../data/reviews";

const SHOP_PRODUCT_URL = "https://beyondbyvera.com/collections/all-products";

const photoPool = [
  "photo-1469334031218-e382a71b716b",
  "photo-1490481651871-ab68de25d43d",
  "photo-1483985988355-763728e1935b",
  "photo-1515886657613-9f3515b0c78f",
  "photo-1539109136881-3be0616acf4b",
  "photo-1485968579580-b6d095142e6e",
  "photo-1495121605193-b116b5b9c5fe",
  "photo-1496747611176-843222e1e57c",
  "photo-1503342217505-b0a15ec3261c",
  "photo-1488462237308-ecaa28b729d7",
  "photo-1518049362265-d5b2a6467637",
  "photo-1469397240536-7faa00781e83",
  "photo-1469371670807-013ccf25f16a",
  "photo-1502635385003-ee1e6a1a742d",
  "photo-1469398715555-76331a6c7c9b",
];

function photoFor(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const slug = photoPool[h % photoPool.length];
  return `https://images.unsplash.com/${slug}?auto=format&fit=crop&w=600&q=70`;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="bg-white/40 border border-line/70 p-7 flex flex-col h-full">
      <Stars rating={review.rating} />
      <h3 className="font-serif text-2xl leading-tight mt-3 mb-2">{review.title}</h3>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
        <span className="small-caps text-charcoal/70">
          {review.reviewer} · {review.city}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] uppercase tracking-widest text-sage border border-sage/50 px-2 py-0.5 rounded-full">
          Verified Buyer
        </span>
        <span className="text-xs text-muted">{formatDate(review.date)}</span>
      </div>

      {review.hasPhoto && (
        <img
          src={photoFor(review.id)}
          alt=""
          loading="lazy"
          className="w-full aspect-square object-cover mb-4 grayscale-[10%]"
        />
      )}

      <p className="text-[0.95rem] leading-relaxed text-charcoal/85 mb-4 whitespace-pre-line">
        {review.body}
      </p>

      <div className="mt-auto pt-4 border-t border-line/60 flex items-center justify-between text-xs">
        <a
          href={SHOP_PRODUCT_URL}
          target="_blank"
          rel="noopener"
          className="italic text-charcoal/70 hover:text-terracotta"
        >
          On the {review.product}
        </a>
        <span className="flex items-center gap-1.5 text-muted">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 22V11M2 13v7a2 2 0 0 0 2 2h3M7 11l4-8a2 2 0 0 1 2 1v5h6a2 2 0 0 1 2 2l-2 7a2 2 0 0 1-2 2H7" />
          </svg>
          Helpful ({review.helpful})
        </span>
      </div>
    </article>
  );
}

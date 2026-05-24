import Stars from "./Stars";
import type { Review } from "../data/reviews";

const SHOP_PRODUCT_URL = "https://beyondbyvera.com/collections/all-products";

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

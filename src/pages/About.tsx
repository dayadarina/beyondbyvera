import Seo from "../components/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="About the Beyond by Vera reviews and journal — why these reviews exist, how they are verified, and the brand they celebrate."
        canonical="/about"
      />

      <section className="px-6 pt-16 pb-12 md:pt-24 text-center">
        <h1 className="font-serif text-5xl md:text-6xl">About</h1>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-prose mx-auto space-y-16">
          <div>
            <div className="small-caps text-terracotta mb-3">Why these reviews exist</div>
            <h2 className="font-serif text-3xl mb-5">For the women who wear Vera</h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              This site is a place to gather the stories of women who reach for these pieces
              on the days that matter — and the quieter days, too. The reviews here are not
              marketing copy. They are small, specific testimonies: a niece's wedding, a
              garden luncheon, a long flight to a place beyond the everyday. We publish them
              because a hand-drawn print deserves the hand-written word, and because the
              women who wear Vera tell its story better than anyone else could.
            </p>
          </div>

          <div>
            <div className="small-caps text-terracotta mb-3">Our verification process</div>
            <h2 className="font-serif text-3xl mb-5">How a review reaches this page</h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              Every review here comes from a confirmed purchase. We edit only for clarity —
              never for tone, and never to soften an honest note. No incentives are offered
              for positive reviews. Photographs are shared with the writer's permission and
              published as they sent them, soft light and all.
            </p>
          </div>

          <div>
            <div className="small-caps text-terracotta mb-3">About Beyond by Vera</div>
            <h2 className="font-serif text-3xl mb-5">Wearable art, drawn by hand</h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              Beyond by Vera is the work of designer Vera Fritsch — pieces built around
              storytelling prints that begin, every time, as hand-drawn artworks on paper.
              Each print is set on the body through a centuries-old screen-printing
              technique, in azo-free, hand-mixed colors, and sewn by Vera's in-house
              seamstresses. The result is meant to be kept, re-worn, and quietly handed on:
              wearable art for the places beyond.
            </p>
            <div className="mt-8">
              <a
                href="https://beyondbyvera.com"
                target="_blank"
                rel="noopener"
                className="inline-block border border-terracotta text-terracotta px-7 py-3 text-sm tracking-widest uppercase hover:bg-terracotta hover:text-ivory transition-colors"
              >
                Shop the collection ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

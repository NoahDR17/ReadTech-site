import { useMemo, useState, useEffect } from "react";

const DEFAULT_REVIEWS = [
  { id: 1, name: "Alex P.", rating: 5, text: "Sold my cracked iPhone 12 and got a great price. Payment arrived the same day!", source: "Google Reviews", date: "Sep 2025" },
  { id: 2, name: "Hannah W.", rating: 5, text: "Best price I found for my old Samsung. The whole process was easy and transparent.", source: "Google Reviews", date: "Aug 2025" },
  { id: 3, name: "Mohammed R.", rating: 5, text: "My phone had water damage but they still bought it. Quick payment via bank transfer.", source: "Google Reviews", date: "Aug 2025" },
  { id: 4, name: "Grace T.", rating: 4, text: "Fair quote for my broken Pixel. They explained everything clearly and payment was fast.", source: "Google Reviews", date: "Jul 2025" },
  { id: 5, name: "Dan K.", rating: 5, text: "Sold three old phones to them. Honest pricing and they kept me updated throughout.", source: "Google Reviews", date: "Jun 2025" },
];

function Stars({ count = 5 }) {
  return (
    <div className="text-yellow-500" aria-hidden>
      {"★".repeat(count)}
      <span className="text-gray-300">{"★".repeat(Math.max(0, 5 - count))}</span>
    </div>
  );
}

/**
 * Continuous, seamless marquee slider.
 * - speedSec: total time for one loop (bigger = slower)
 * - pauses on hover
 * - respects prefers-reduced-motion
 */
export default function ReviewsSlider({ reviews = DEFAULT_REVIEWS, speedSec = 30 }) {
  const items = useMemo(() => (reviews && reviews.length ? reviews : DEFAULT_REVIEWS), [reviews]);
  const doubled = useMemo(() => [...items, ...items], [items]);
  const [paused, setPaused] = useState(false);

  // reduced motion?
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(!!mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);

  return (
    <section id="reviews" className="py-16 md:py-20 bg-white" aria-label="Customer Reviews">
      {/* keyframes for the marquee (scoped) */}
      <style>{`
        @keyframes marquee-x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What customers say</h2>
          <p className="text-gray-700 mt-2">Real reviews from people who sold their phones to us.</p>
        </div>

        {/* Marquee viewport */}
        <div
          className="relative mt-8 overflow-hidden rounded-3xl border bg-gray-50"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* soft gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent" />

          {/* Track (2x length for seamless loop) */}
          <div
            className="flex gap-4 will-change-transform"
            style={{
              animation: reduced ? "none" : `marquee-x var(--d) linear infinite`,
              animationPlayState: paused ? "paused" : "running",
              // loop duration
              ["--d"]: `${speedSec}s`,
            }}
            role="list"
          >
            {doubled.map((r, idx) => (
              <article
                key={`${r.id}-${idx}`}
                role="listitem"
                className="w-80 sm:w-96 lg:w-[28rem] flex-none"
                aria-label={`Review by ${r.name}`}
              >
                <div className="h-full p-4 sm:p-6">
                  <div className="rounded-3xl bg-white h-full p-6 shadow-sm border">
                    <div className="flex items-center justify-between">
                      <Stars count={r.rating} />
                      <span className="text-xs text-gray-500">{r.date}</span>
                    </div>
                    <p className="mt-4 text-gray-700 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    <div className="mt-6 flex items-center justify-between text-sm">
                      <div className="font-semibold">{r.name}</div>
                      <div className="text-gray-500">{r.source}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sub-copy / trust line (optional) */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Verified by Google — ask in store to see our latest ratings.
        </p>
      </div>
    </section>
  );
}

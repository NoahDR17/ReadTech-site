import { useMemo, useState, useEffect, useRef } from "react";

const DEFAULT_REVIEWS = [
  { id: 1, name: "Alex P.", rating: 5, text: "Sold my cracked iPhone 12 and got a great price. Payment arrived the same day!", source: "Google Reviews", date: "Sep 2025" },
  { id: 2, name: "Hannah W.", rating: 5, text: "Best price I found for my old Samsung. The whole process was easy and transparent.", source: "Google Reviews", date: "Aug 2025" },
  { id: 3, name: "Mohammed R.", rating: 5, text: "My phone had water damage but they still bought it. Quick payment via bank transfer.", source: "Google Reviews", date: "Aug 2025" },
  { id: 4, name: "Grace T.", rating: 4, text: "Fair quote for my broken Pixel. They explained everything clearly and payment was fast.", source: "Google Reviews", date: "Jul 2025" },
  { id: 5, name: "Dan K.", rating: 5, text: "Sold three old phones to them. Honest pricing and they kept me updated throughout.", source: "Google Reviews", date: "Jun 2025" },
];

const SWIPE_THRESHOLD = 50;

function Stars({ count = 5 }) {
  return (
    <div className="text-yellow-500" aria-hidden>
      {"★".repeat(count)}
      <span className="text-gray-300">{"★".repeat(Math.max(0, 5 - count))}</span>
    </div>
  );
}

/**
 * Testimonials slider that adapts based on screen size:
 * - Mobile (< 640px): Manual swipe with touch gestures
 * - Larger screens: Automatic continuous marquee
 */
export default function ReviewsSlider({ reviews = DEFAULT_REVIEWS, speedSec }) {
  const items = useMemo(() => (reviews && reviews.length ? reviews : DEFAULT_REVIEWS), [reviews]);
  const doubled = useMemo(() => [...items, ...items], [items]);
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef(null);

  // Dynamically set speed based on screen size and detect mobile
  const [slideSpeed, setSlideSpeed] = useState(speedSec || 30);
  useEffect(() => {
    function updateSettings() {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (!mobile) {
        if (window.innerWidth < 1024) setSlideSpeed(20);
        else setSlideSpeed(speedSec || 30);
      }
    }
    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, [speedSec]);

  // reduced motion?
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

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > SWIPE_THRESHOLD) {
      // Swipe left - next
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else if (touchEndX.current - touchStartX.current > SWIPE_THRESHOLD) {
      // Swipe right - previous
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="reviews" className="py-16 md:py-20 bg-white border-t border-gray-200" aria-label="Customer Reviews">
      {/* keyframes for marquee (scoped) */}
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
          <p className="text-gray-600 mt-2">Real reviews from people who sold their phones to us.</p>
        </div>

        {/* Mobile: Manual swipe slider */}
        {isMobile ? (
          <div className="relative mt-8">
            <div 
              ref={containerRef}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
                role="list"
              >
                {items.map((r) => (
                  <article
                    key={r.id}
                    role="listitem"
                    className="w-full flex-none"
                    aria-label={`Review by ${r.name}`}
                  >
                    <div className="h-full p-4">
                      <div className="rounded-2xl bg-white h-full p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                          <Stars count={r.rating} />
                          <span className="text-xs text-gray-500">{r.date}</span>
                        </div>
                        <p className="mt-4 text-gray-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
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

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Review navigation">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-300'
                  }`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Automatic marquee */
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
            {/* soft gradient edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-gray-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-gray-50 to-transparent" />

            {/* Track (2x length for seamless loop) */}
            <div
              className="flex gap-4 will-change-transform"
              style={{
                animation: reduced ? "none" : `marquee-x var(--d) linear infinite`,
                ["--d"]: `${slideSpeed}s`,
              }}
              role="list"
            >
              {doubled.map((r, idx) => (
                <article
                  key={`${r.id}-${idx}`}
                  role="listitem"
                  className="w-full sm:w-80 md:w-96 lg:w-[28rem] flex-none"
                  aria-label={`Review by ${r.name}`}
                >
                  <div className="h-full p-4 sm:p-6">
                    <div className="rounded-2xl bg-white h-full p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between">
                        <Stars count={r.rating} />
                        <span className="text-xs text-gray-500">{r.date}</span>
                      </div>
                      <p className="mt-4 text-gray-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
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
        )}

        {/* Sub-copy / trust line */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Verified by Google — ask in store to see our latest ratings.
        </p>
      </div>
    </section>
  );
}

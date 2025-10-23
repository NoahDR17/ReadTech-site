import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import ReviewsSlider from "../components/ReviewsSlider.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>FlipMobile — Buy • Sell • Repair Phones</title>
        <meta
          name="description"
          content="Fast quotes, fair prices, and same-day repairs. Visit our shop or use our mail-in service."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Container className="py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Buy • Sell • Repair
              <br />
              Mobile phones made simple
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Instant quotes, great prices, and most repairs in 1–2 hours.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/quote"
                className="rounded-2xl px-5 py-3 bg-black text-white shadow"
              >
                Get a quote
              </Link>
              <Link
                to="/products"
                className="rounded-2xl px-5 py-3 bg-white border shadow"
              >
                View stock
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Fully tested devices • 90-day repair warranty
            </p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-200 to-gray-100 shadow-inner flex items-center justify-center">
            <div className="text-7xl" aria-hidden>
              📱
            </div>
          </div>
        </Container>
      </section>

{/* About Us Section */}
<section id="about" className="py-20 bg-white border-t">
  <Container>
    {/* Section header */}
    <div className="max-w-3xl mx-auto text-center">
      <span className="inline-block text-xs tracking-widest uppercase text-gray-500">
        About Us
      </span>
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
        Honest prices. Same-day repairs. Fully tested devices.
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        At <span className="font-semibold">FlipMobile</span>, we make buying, selling, and repairing phones
        quick and transparent. Visit us in-store or use our secure mail-in service —
        we’ll handle the rest.
      </p>
    </div>

    {/* Two-column layout */}
    <div className="mt-12 grid md:grid-cols-12 gap-8 items-start">
      {/* Left: copy + value grid + stats */}
      <div className="md:col-span-7">
        {/* Value props */}
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "🛠️", title: "Expert repairs", desc: "Screens, batteries, diagnostics & data transfer." },
            { icon: "💷", title: "Fair payouts", desc: "Instant quotes and fast bank transfer or cash." },
            { icon: "🛡️", title: "Warranty backed", desc: "90-day repair warranty; devices fully tested." },
            { icon: "🚚", title: "Mail-in friendly", desc: "Fully insured postage options across the UK." },
          ].map((item) => (
            <li key={item.title} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl" aria-hidden>{item.icon}</div>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ul>

        {/* Body copy */}
        <div className="mt-6 text-gray-700 leading-relaxed">
          <p>
            We carefully test every device for battery health, network status, and functionality,
            and we never access personal data beyond what’s needed for diagnostics. If you’re upgrading,
            we’ll help you move your data and safely wipe your old phone.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { k: "4,000+", v: "Devices serviced" },
            { k: "1–2 hrs", v: "Typical repair time" },
            { k: "4.8★",   v: "Average rating" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border p-5 bg-white text-center shadow-sm">
              <div className="text-2xl font-extrabold">{s.k}</div>
              <div className="text-xs text-gray-600 mt-1">{s.v}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link to="/quote" className="rounded-2xl bg-brand text-white px-6 py-3 shadow hover:bg-brand-dark text-center">
            Get a quick quote
          </Link>
          <Link to="/products" className="rounded-2xl border px-6 py-3 shadow text-center">
            Browse stock
          </Link>
        </div>
      </div>

      {/* Right: visual card with badges */}
      <div className="md:col-span-5">
        <div className="relative rounded-3xl border bg-white p-5 shadow-lg">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
            <span className="text-7xl" aria-hidden>📱</span>
          </div>

          {/* Overlays / trust badges */}
          <div className="mt-4 grid gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand text-white">✓</span>
              <span>90-day repair warranty</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand text-white">✓</span>
              <span>Data privacy assured</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand text-white">✓</span>
              <span>Price-match promise*</span>
            </div>
          </div>

          {/* Small note */}
          <p className="mt-3 text-xs text-gray-500">
            *On like-for-like quotes from local, VAT-registered shops.
          </p>
        </div>

        {/* “As seen on / payment” strip (optional) */}
        <div className="mt-6 rounded-2xl border bg-gray-50 p-4 text-center text-xs text-gray-600">
          We accept major cards & contactless • Apple Pay • Google Pay
        </div>
      </div>
    </div>
  </Container>
</section>
<ReviewsSlider />

    </>
  );
}

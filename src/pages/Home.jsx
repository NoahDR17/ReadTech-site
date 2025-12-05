import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import ReviewsSlider from "../components/ReviewsSlider.jsx";
import p2 from "../assets/p2.jpg";
import p1 from "../assets/p1.jpg";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Readtech — We Buy Old &amp; Broken Phones</title>
        <meta
          name="description"
          content="Sell your old, broken, or unwanted phone for cash. We buy all brands and conditions including cracked screens, faulty batteries, and water damage."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Container className="py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Sell Your Old or Broken Phone
              <br />
              Get Cash Fast
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We buy phones in any condition — cracked screens, faulty batteries, water damage, or simply unwanted upgrades.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/quote"
                className="rounded-2xl px-5 py-3 bg-brand text-white shadow-sm hover:bg-brand-dark transition-all"
              >
                Sell your phone
              </Link>
              <Link
                to="/products"
                className="rounded-2xl px-5 py-3 bg-white border border-gray-300 shadow-sm hover:border-brand hover:text-brand transition-all"
              >
                What we buy
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Instant quotes • Same-day payment • All major brands accepted
            </p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 shadow-sm flex items-center justify-center border border-gray-200 overflow-hidden">
            <img src={p2} alt="phone image" className="w-full h-full object-cover" />
          </div>
        </Container>
      </section>

{/* About Us Section */}
<section id="about" className="py-20 bg-gray-50 border-t border-gray-200">
  <Container>
    {/* Section header */}
    <div className="max-w-3xl mx-auto text-center">
      <span className="inline-block text-xs tracking-widest uppercase text-accent">
        How It Works
      </span>
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
        Turn Your Old Phone Into Cash in 3 Easy Steps
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        At <span className="font-semibold">Readtech</span>, we make selling your phone
        quick, secure, and transparent. Whether it's cracked, broken, or just outdated —
        we'll give you a fair price.
      </p>
    </div>

    {/* Two-column layout */}
    <div className="mt-12 grid md:grid-cols-12 gap-8 items-start">
      {/* Left: copy + value grid + stats */}
      <div className="md:col-span-7">
        {/* Value props */}
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "", title: "Best prices", desc: "Competitive offers for phones in any condition." },
            { icon: "", title: "Fast payment", desc: "Instant bank transfer or cash once we verify your device." },
            { icon: "", title: "Data wiped safely", desc: "We securely erase all your personal data." },
            { icon: "", title: "Free postage", desc: "Use our insured mail-in service across the UK." },
          ].map((item) => (
            <li key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand transition-all">
              <div className="text-2xl" aria-hidden>{item.icon}</div>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ul>

        {/* Body copy */}
        <div className="mt-6 text-gray-600 leading-relaxed">
          <p>
            We buy all major phone brands including Apple, Samsung, Google Pixel, OnePlus, and more.
            From cracked screens to faulty batteries, water damage to phones that won't turn on —
            we accept devices in all conditions. Get an instant quote online or visit us in-store
            to sell your phone today.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { k: "200+", v: "Phones purchased" },
            { k: "Same day", v: "Payment time" },
            { k: "4.9★",   v: "Customer rating" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-gray-200 p-5 bg-white text-center shadow-sm hover:border-brand transition-all">
              <div className="text-2xl font-extrabold">{s.k}</div>
              <div className="text-xs text-gray-600 mt-1">{s.v}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link to="/quote" className="rounded-2xl bg-brand text-white px-6 py-3 shadow-sm hover:bg-brand-dark text-center transition-all">
            Get instant quote
          </Link>
          <Link to="/products" className="rounded-2xl border border-gray-300 px-6 py-3 shadow-sm text-center hover:border-brand hover:text-brand transition-all">
            See what we buy
          </Link>
        </div>
      </div>

      {/* Right: visual card with badges */}
      <div className="md:col-span-5">
        <div className="relative rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200 overflow-hidden">
            <img src={p1} alt="phone image" className="w-full h-full object-cover" />
          </div>

          {/* Overlays / trust badges */}
          <div className="mt-4 grid gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand text-white">✓</span>
              <span>All brands accepted</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand text-white">✓</span>
              <span>Any condition considered</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand text-white">✓</span>
              <span>Instant payment guarantee</span>
            </div>
          </div>

          {/* Small note */}
          <p className="mt-3 text-xs text-gray-500">
            From working to broken — we buy it all
          </p>
        </div>

        {/* “As seen on / payment” strip (optional) */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center text-xs text-gray-600">
          We pay via bank transfer • Cash in-store • Apple Pay • Google Pay
        </div>
      </div>
    </div>
  </Container>
</section>
<ReviewsSlider />

    </>
  );
}

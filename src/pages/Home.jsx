import { Helmet } from "@dr.pogodin/react-helmet";import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>FlipMobile — Buy • Sell • Repair Phones</title>
        <meta name="description" content="Fast quotes, fair prices, and same-day repairs. Visit our shop or use our mail-in service." />
      </Helmet>

      <section className="relative overflow-hidden">
        <Container className="py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Buy • Sell • Repair<br />Mobile phones made simple
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Instant quotes, great prices, and most repairs in 1–2 hours.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/quote" className="rounded-2xl px-5 py-3 bg-black text-white shadow">Get a quote</Link>
              <Link to="/products" className="rounded-2xl px-5 py-3 bg-white border shadow">View stock</Link>
            </div>
            <p className="mt-4 text-xs text-gray-500">Fully tested devices • 90-day repair warranty</p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-200 to-gray-100 shadow-inner flex items-center justify-center">
            <div className="text-7xl" aria-hidden>📱</div>
          </div>
        </Container>
      </section>
    </>
  );
}

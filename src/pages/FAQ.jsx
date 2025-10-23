import { Helmet } from "@dr.pogodin/react-helmet";
import { useState } from "react";
import Container from "../components/Container.jsx";

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-4 py-4 text-left">
        <span className="font-medium">{q}</span>
        <span aria-hidden>{open ? "–" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-gray-700">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    { q: "How long do repairs take?", a: "Most repairs are completed within 1–2 hours depending on parts and workload." },
    { q: "Do you offer warranty?", a: "Yes, 90-day warranty on repairs and 30-day return policy on devices unless stated otherwise." },
    { q: "How do I get paid when selling?", a: "Instant bank transfer or cash in-store once the device is tested." },
    { q: "What about data privacy?", a: "We never access personal data beyond testing requirements and can wipe your device on request." },
  ];

  return (
    <>
      <Helmet>
        <title>FAQ — FlipMobile</title>
        <meta name="description" content="Common questions about phone repairs, buying, selling, warranty, and data privacy." />
      </Helmet>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl bg-white border rounded-2xl">
          <h1 className="text-3xl font-bold p-4 pb-0">Frequently asked questions</h1>
          <div className="mt-4">{faqs.map((f, i) => <Item key={i} {...f} />)}</div>
          <p className="p-4 text-sm text-gray-600">Still stuck? <a className="underline" href="/contact">Contact us</a>.</p>
        </Container>
      </section>
    </>
  );
}

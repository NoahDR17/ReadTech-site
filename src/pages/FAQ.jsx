import { Helmet } from "@dr.pogodin/react-helmet";
import { useState } from "react";
import Container from "../components/Container.jsx";

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-50 transition-colors">
        <span className="font-medium">{q}</span>
        <span aria-hidden>{open ? "–" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-gray-600">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    { 
      q: "What types of phones do you buy?", 
      a: "We buy all major brands including Apple (iPhone), Samsung, Google Pixel, OnePlus, Huawei, and more. We accept phones from recent models to older devices, in any condition." 
    },
    { 
      q: "What conditions do you accept?", 
      a: "We buy phones in ANY condition: working, cracked screens, faulty batteries, water damaged, won't turn on, or completely dead. Even if your phone has multiple issues, we'll still make you an offer." 
    },
    { 
      q: "How do I get a quote?", 
      a: "Fill out our online quote form with your phone's make, model, storage, and condition. We'll respond within 24 hours with a fair offer. You can also visit us in-store or message us on WhatsApp for an instant quote." 
    },
    { 
      q: "How do I get paid?", 
      a: "We offer same-day payment via instant bank transfer or cash if you visit our shop. Once we verify your device matches the description you provided, payment is processed immediately." 
    },
    { 
      q: "Do I need to factory reset my phone?", 
      a: "No, you don't need to. We securely wipe all data from every device we receive. However, we recommend backing up any important data before sending your phone to us." 
    },
    { 
      q: "What about my personal data?", 
      a: "We take data privacy seriously. All devices are professionally wiped using industry-standard methods to ensure your personal information is completely erased and unrecoverable." 
    },
    { 
      q: "How does the postage work?", 
      a: "If you accept our quote, we'll send you a free, fully insured postage label. Just pack your phone securely and drop it off at your nearest post office or arrange a collection." 
    },
    { 
      q: "What if my phone is locked or blacklisted?", 
      a: "Please let us know if your phone is network locked or blacklisted when requesting a quote. We may still be able to buy it, but the value will be adjusted accordingly." 
    },
    { 
      q: "Can I sell a phone with a cracked screen?", 
      a: "Absolutely! We buy phones with cracked screens, shattered displays, and LCD damage. The quote will reflect the condition, but we're still interested." 
    },
    { 
      q: "What if my phone won't turn on?", 
      a: "We buy phones that won't turn on. Whether it's a dead battery, water damage, or hardware failure, we'll still make you an offer." 
    },
    { 
      q: "How long does the process take?", 
      a: "Once you send your phone, we typically verify it within 1-2 business days. Payment is sent the same day we complete verification." 
    },
    { 
      q: "Do you buy phones with finance still owed?", 
      a: "We can only buy phones that are fully paid off and not tied to any finance agreements. Please ensure your device is fully yours to sell." 
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAQ — PhoneFlip</title>
        <meta name="description" content="Common questions about selling your phone, accepted conditions, payment, data privacy, and our buying process." />
      </Helmet>

      <section className="py-12 md:py-16 bg-gray-50">
        <Container className="max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-sm">
          <h1 className="text-3xl font-bold p-4 pb-0">Frequently Asked Questions</h1>
          <p className="px-4 pt-2 text-gray-600">Everything you need to know about selling your phone to us</p>
          <div className="mt-4">{faqs.map((f, i) => <Item key={i} {...f} />)}</div>
          <p className="p-4 text-sm text-gray-600">Still have questions? <a className="underline hover:text-brand transition-colors" href="/contact">Contact us</a> or message us on <a className="underline hover:text-brand transition-colors" href="https://wa.me/447000000000" target="_blank" rel="noreferrer">WhatsApp</a>.</p>
        </Container>
      </section>
    </>
  );
}

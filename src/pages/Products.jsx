import { Helmet } from "@dr.pogodin/react-helmet";
import Container from "../components/Container.jsx";
import { Link } from "react-router-dom";

export default function Products() {
  const brands = [
    { name: "Apple", models: "iPhone 8 and newer", icon: "🍎" },
    { name: "Samsung", models: "Galaxy S8 and newer, Note series", icon: "📱" },
    { name: "Google", models: "Pixel 2 and newer", icon: "🔍" },
    { name: "OnePlus", models: "OnePlus 5 and newer", icon: "📲" },
    { name: "Huawei", models: "P20 and newer, Mate series", icon: "📱" },
    { name: "Other Brands", models: "Sony, LG, Motorola, Nokia, and more", icon: "📱" },
  ];

  const conditions = [
    { title: "Working", desc: "Fully functional devices in good condition", examples: "Minor scratches, normal wear" },
    { title: "Cracked Screen", desc: "Display is cracked but phone still works", examples: "Broken glass, LCD damage" },
    { title: "Faulty Battery", desc: "Battery drains quickly or won't hold charge", examples: "Poor battery health" },
    { title: "Water Damaged", desc: "Device has been exposed to liquid", examples: "Water, coffee, or other liquids" },
    { title: "Won't Turn On", desc: "Device powers on but has issues", examples: "Boot loops, frozen screens" },
    { title: "Completely Dead", desc: "Device doesn't respond at all", examples: "No power, black screen" },
  ];

  return (
    <>
      <Helmet>
        <title>What We Buy — Readtech</title>
        <meta name="description" content="We buy phones in all conditions from all major brands. Apple, Samsung, Google Pixel, and more." />
      </Helmet>

      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">What We Buy</h1>
            <p className="mt-4 text-lg text-gray-600">
              We purchase phones from all major brands, in any condition. From the latest models 
              to older devices, working or broken — we'll make you an offer.
            </p>
          </div>

          {/* Brands Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Brands We Accept</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {brands.map((brand) => (
                <div key={brand.name} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand transition-all">
                  <div className="text-4xl mb-2" aria-hidden>{brand.icon}</div>
                  <h3 className="font-semibold text-lg">{brand.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{brand.models}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-6">Conditions We Accept</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {conditions.map((condition) => (
                <div key={condition.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-lg">{condition.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{condition.desc}</p>
                  <p className="text-xs text-gray-500 mt-1">Examples: {condition.examples}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Need Section */}
          <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-center mb-4">How to Get a Quote</h2>
            <div className="max-w-2xl mx-auto">
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-none w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">1</span>
                  <div>
                    <h3 className="font-semibold">Tell us about your phone</h3>
                    <p className="text-sm text-gray-600">Brand, model, storage capacity, and condition</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-none w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">2</span>
                  <div>
                    <h3 className="font-semibold">Get an instant quote</h3>
                    <p className="text-sm text-gray-600">We'll provide a fair offer based on current market value</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-none w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">3</span>
                  <div>
                    <h3 className="font-semibold">Send it in or visit us</h3>
                    <p className="text-sm text-gray-600">Use our free postage service or come to our shop for same-day payment</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-10 text-center">
            <Link 
              to="/quote" 
              className="inline-block rounded-2xl bg-brand text-white px-8 py-4 text-lg shadow-sm hover:bg-brand-dark transition-all"
            >
              Get Your Quote Now
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Questions? <a href="/contact" className="underline hover:text-brand transition-colors">Contact us</a> or message us on{" "}
              <a className="underline hover:text-brand transition-colors" href="https://wa.me/447000000000" target="_blank" rel="noreferrer">WhatsApp</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

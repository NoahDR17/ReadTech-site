import { Helmet } from "@dr.pogodin/react-helmet";
import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import { Link } from "react-router-dom";

export default function Products() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("recent");

  const products = useMemo(
    () => [
      { id: 1, model: "iPhone 13", price: 329, grade: "A", storage: "128GB", network: "Unlocked", badge: "New arrival" },
      { id: 2, model: "Samsung S21", price: 249, grade: "B", storage: "128GB", network: "Unlocked" },
      { id: 3, model: "iPhone XR", price: 149, grade: "B", storage: "64GB", network: "Unlocked" },
      { id: 4, model: "Google Pixel 6", price: 219, grade: "A", storage: "128GB", network: "Unlocked" },
    ],
    []
  );

  const filtered = useMemo(() => {
    const term = q.toLowerCase();
    let list = products.filter(
      (p) => p.model.toLowerCase().includes(term) || p.storage.toLowerCase().includes(term)
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [q, sort, products]);

  return (
    <>
      <Helmet>
        <title>Products / Stock — FlipMobile</title>
        <meta name="description" content="Browse refurbished phone stock. Contact us for today’s availability." />
      </Helmet>

      <section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Products / Stock</h1>
              <p className="text-gray-700">Stock changes daily — contact us for the latest availability.</p>
            </div>
            <div className="flex gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search model or storage"
                className="rounded-xl border p-3 w-56"
              />
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-xl border p-3">
                <option value="recent">Sort: Recent</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.id} className="rounded-3xl border bg-white p-4 shadow-sm">
                <div className="aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center">
                  <span className="text-5xl" aria-hidden>📱</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{p.model}</h3>
                    <p className="text-sm text-gray-500">{p.network} • Grade {p.grade} • {p.storage}</p>
                  </div>
                  <div className="font-bold">£{p.price}</div>
                </div>
                {p.badge && <div className="mt-2 inline-block text-xs bg-gray-900 text-white rounded-full px-2 py-1">{p.badge}</div>}
              </article>
            ))}
          </div>

          <div className="mt-10 text-sm text-gray-600">
            Can’t see your model? <Link to="/quote" className="underline">Request a quote</Link> or message us on{" "}
            <a className="underline" href="https://wa.me/447000000000" target="_blank" rel="noreferrer">WhatsApp</a>.
          </div>
        </Container>
      </section>
    </>
  );
}

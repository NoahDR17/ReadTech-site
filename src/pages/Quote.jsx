import { Helmet } from "@dr.pogodin/react-helmet";
import Container from "../components/Container.jsx";
import { useState } from "react";

export default function Quote() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    deviceModel: "", storage: "", condition: "",
    imei: "", issue: "", service: "sell",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  function updateField(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }
  function validate() {
    if (!form.name || !form.phone || !form.deviceModel || !form.service) return "Please fill the required fields.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Enter a valid email.";
    return "";
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) return setMessage(err);
    try {
      setSubmitting(true); setMessage("");
      await new Promise((r) => setTimeout(r, 800)); // replace with real endpoint
      setMessage("Thanks! We'll get back to you shortly with a quote.");
      setForm({ name: "", phone: "", email: "", deviceModel: "", storage: "", condition: "", imei: "", issue: "", service: "sell" });
    } catch {
      setMessage("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Get a quote — FlipMobile</title>
        <meta name="description" content="Request a price for selling your phone or a repair estimate." />
      </Helmet>

      <section className="py-12 md:py-16 bg-white">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold">Get a quick quote</h1>
          <p className="mt-2 text-gray-700">Tell us about your device. We’ll reply with a price estimate or repair cost.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              { label: "Name *", name: "name", required: true },
              { label: "Phone *", name: "phone", required: true, placeholder: "07…" },
            ].map((f) => (
              <div key={f.name} className="grid gap-1">
                <label className="text-sm">{f.label}</label>
                <input
                  name={f.name}
                  value={form[f.name]}
                  onChange={updateField}
                  required={f.required}
                  placeholder={f.placeholder || ""}
                  className="rounded-xl border p-3"
                />
              </div>
            ))}
            <div className="grid gap-1">
              <label className="text-sm">Email</label>
              <input type="email" name="email" value={form.email} onChange={updateField} className="rounded-xl border p-3" placeholder="you@example.com" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm">Service *</label>
              <select name="service" value={form.service} onChange={updateField} className="rounded-xl border p-3">
                <option value="sell">Sell my phone</option>
                <option value="buy">Buy a phone</option>
                <option value="repair">Repair my phone</option>
              </select>
            </div>
            <div className="grid gap-1 md:col-span-2">
              <label className="text-sm">Device model *</label>
              <input name="deviceModel" value={form.deviceModel} onChange={updateField} className="rounded-xl border p-3" placeholder="e.g., iPhone 13, Samsung S21" required />
            </div>
            <div className="grid gap-1">
              <label className="text-sm">Storage</label>
              <input name="storage" value={form.storage} onChange={updateField} className="rounded-xl border p-3" placeholder="e.g., 128GB" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm">Condition</label>
              <select name="condition" value={form.condition} onChange={updateField} className="rounded-xl border p-3">
                <option value="">Select condition</option>
                <option value="like-new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="faulty">Faulty</option>
              </select>
            </div>
            <div className="grid gap-1 md:col-span-2">
              <label className="text-sm">IMEI (optional)</label>
              <input name="imei" value={form.imei} onChange={updateField} className="rounded-xl border p-3" placeholder="15-digit IMEI for accurate quote" />
            </div>
            <div className="grid gap-1 md:col-span-2">
              <label className="text-sm">Issue / Notes</label>
              <textarea name="issue" value={form.issue} onChange={updateField} className="rounded-xl border p-3" rows={4} placeholder="Cracked screen, weak battery, network unlock, etc." />
            </div>
            <div className="md:col-span-2 flex items-center gap-4">
              <button type="submit" disabled={submitting} className="rounded-2xl bg-brand text-white px-6 py-3 shadow hover:bg-brand-dark">
                {submitting ? "Sending…" : "Request quote"}
              </button>
              <a href="https://wa.me/447000000000" target="_blank" rel="noreferrer" className="text-sm underline">Or message us on WhatsApp</a>
            </div>
            {message && <div className="md:col-span-2 text-sm text-gray-700">{message}</div>}
          </form>
        </Container>
      </section>
    </>
  );
}

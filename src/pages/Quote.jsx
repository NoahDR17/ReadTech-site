import { Helmet } from "@dr.pogodin/react-helmet";
import Container from "../components/Container.jsx";
import { useState } from "react";

export default function Quote() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    deviceModel: "", storage: "", condition: "",
    imei: "", issue: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  function updateField(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }
  function validate() {
    if (!form.name || !form.phone || !form.deviceModel || !form.condition) return "Please fill the required fields.";
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
      setMessage("Thanks! We'll get back to you shortly with a quote for your device.");
      setForm({ name: "", phone: "", email: "", deviceModel: "", storage: "", condition: "", imei: "", issue: "" });
    } catch {
      setMessage("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Sell Your Phone — PhoneFlip</title>
        <meta name="description" content="Get an instant quote for your old or broken phone. We buy all brands and conditions." />
      </Helmet>

      <section className="py-12 md:py-16 bg-gray-50">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold">Sell Your Phone</h1>
          <p className="mt-2 text-gray-600">Tell us about your device and we'll provide you with an instant quote.</p>

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
                  className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                />
              </div>
            ))}
            <div className="grid gap-1 md:col-span-2">
              <label className="text-sm">Email</label>
              <input type="email" name="email" value={form.email} onChange={updateField} className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="you@example.com" />
            </div>
            <div className="grid gap-1 md:col-span-2">
              <label className="text-sm">Device model *</label>
              <input name="deviceModel" value={form.deviceModel} onChange={updateField} className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="e.g., iPhone 13, Samsung Galaxy S21, Google Pixel 6" required />
            </div>
            <div className="grid gap-1">
              <label className="text-sm">Storage</label>
              <select name="storage" value={form.storage} onChange={updateField} className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all">
                <option value="">Select storage</option>
                <option value="64GB">64GB</option>
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                <option value="512GB">512GB</option>
                <option value="1TB">1TB</option>
                <option value="other">Other / Don't know</option>
              </select>
            </div>
            <div className="grid gap-1">
              <label className="text-sm">Condition *</label>
              <select name="condition" value={form.condition} onChange={updateField} className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" required>
                <option value="">Select condition</option>
                <option value="working">Working - No issues</option>
                <option value="minor-damage">Minor damage - Scratches/dents</option>
                <option value="cracked-screen">Cracked screen</option>
                <option value="faulty-battery">Faulty battery</option>
                <option value="water-damage">Water damage</option>
                <option value="wont-turn-on">Won't turn on</option>
                <option value="other-issues">Other issues</option>
              </select>
            </div>
            <div className="grid gap-1 md:col-span-2">
              <label className="text-sm">IMEI (optional but helps us give accurate quotes)</label>
              <input name="imei" value={form.imei} onChange={updateField} className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="15-digit IMEI number (dial *#06# to find it)" />
              <p className="text-xs text-gray-500">Dial *#06# on your phone to find your IMEI number</p>
            </div>
            <div className="grid gap-1 md:col-span-2">
              <label className="text-sm">Additional details / Issues</label>
              <textarea name="issue" value={form.issue} onChange={updateField} className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" rows={4} placeholder="Please describe any issues with your phone: screen damage, battery problems, physical damage, etc." />
            </div>
            <div className="md:col-span-2 flex items-center gap-4">
              <button type="submit" disabled={submitting} className="rounded-2xl bg-brand text-white px-6 py-3 shadow-sm hover:bg-brand-dark disabled:opacity-50 transition-all">
                {submitting ? "Sending…" : "Get my quote"}
              </button>
              <a href="https://wa.me/447000000000" target="_blank" rel="noreferrer" className="text-sm underline hover:text-brand transition-colors">Or message us on WhatsApp</a>
            </div>
            {message && <div className="md:col-span-2 text-sm text-gray-600">{message}</div>}
          </form>

          {/* Privacy note */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold mb-2">📋 What happens next?</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• We'll review your device details and send you a quote within 24 hours</li>
              <li>• If you accept, we'll provide free postage labels or you can visit us in-store</li>
              <li>• Once we verify your device, you'll receive payment the same day</li>
              <li>• We securely wipe all data from your phone</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

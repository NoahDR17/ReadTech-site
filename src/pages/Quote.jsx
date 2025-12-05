import { Helmet } from "@dr.pogodin/react-helmet";
import Container from "../components/Container.jsx";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// Pricing config
// - basePrice: uses the "Great" price from your table for each model + storage
const PRICING = {
  basePrice: {
    // ==== iPhone 11 family ====
    "iphone 11": {
      "64GB": 92,
      "128GB": 80,
    },
    "iphone 11 pro": {
      "64GB": 82,
      "256GB": 92,
      "512GB": 97,
    },
    "iphone 11 pro max": {
      "64GB": 84,
      "256GB": 94,
      "512GB": 102,
    },

    // ==== Galaxy S10 family ====
    "galaxy s10": {
      "64GB": 90,
      "128GB": 79,
    },
    "galaxy s10+": {
      "64GB": 83,
      "256GB": 93,
      "512GB": 95,
    },
    "galaxy s10 5g": {
      "64GB": 83,
      "256GB": 92,
      "512GB": 101,
    },

    // ==== Pixel 5 / 5 XL ====
    "pixel 5": {
      "64GB": 91,
      "128GB": 81,
    },
    "pixel 5 xl": {
      "64GB": 83,
      "256GB": 91,
      "512GB": 96,
    },

    // ==== Pixel 6 / 6 Pro / 6 Pro XL / 6a ====
    "pixel 6": {
      "64GB": 86,
      "128GB": 96,
      "256GB": 109,
    },
    "pixel 6 pro": {
      "64GB": 83,
      "128GB": 89,
      "256GB": 99,
      "512GB": 111,
    },
    "pixel 6 pro xl": {
      "128GB": 109,
      "256GB": 126,
      "512GB": 141,
    },
    "pixel 6a": {
      "128GB": 117,
      "256GB": 126,
      "512GB": 145,
    },

    // ==== Pixel 5a ====
    "pixel 5a": {
      "64GB": 83,
      "128GB": 93,
      "512GB": 101,
    },

    // ==== iPhone 12 family ====
    "iphone 12": {
      "64GB": 85,
      "128GB": 97,
      "256GB": 110,
    },
    "iphone 12 pro": {
      "128GB": 88,
      "256GB": 100,
      "512GB": 112,
    },
    "iphone 12 pro max": {
      "128GB": 110,
      "256GB": 127,
      "512GB": 142,
    },
    "iphone 12 mini": {
      "64GB": 84,
      "128GB": 94,
      "512GB": 102,
    },

    // ==== Galaxy S20 family ====
    "galaxy s20": {
      "64GB": 86,
      "128GB": 96,
      "256GB": 108,
    },
    "galaxy s20+": {
      "128GB": 90,
      "256GB": 99,
      "512GB": 111,
    },
    "galaxy s20 ultra": {
      "128GB": 108,
      "256GB": 125,
      "512GB": 140,
    },
    "galaxy s20 fe": {
      "64GB": 82,
      "128GB": 92,
      "512GB": 103,
    },

    // ==== iPhone 13 family ====
    "iphone 13": {
      "128GB": 118,
      "256GB": 127,
      "512GB": 146,
    },
    "iphone 13 pro": {
      "128GB": 136,
      "256GB": 160,
      "512GB": 171,
      "1TB": 193,
    },
    "iphone 13 pro max": {
      "128GB": 136,
      "256GB": 172,
      "512GB": 185,
      "1TB": 213,
    },
    "iphone 13 mini": {
      "128GB": 115,
      "256GB": 123,
      "512GB": 141,
    },

    // ==== Galaxy S21 family ====
    "galaxy s21": {
      "128GB": 117,
      "256GB": 126,
      "512GB": 144,
    },
    "galaxy s21+": {
      "128GB": 135,
      "256GB": 159,
      "512GB": 170,
      "1TB": 192,
    },
    "galaxy s21 ultra": {
      "128GB": 135,
      "256GB": 171,
      "512GB": 184,
      "1TB": 212,
    },
    "galaxy s21 fe": {
      "128GB": 116,
      "256GB": 121,
      "512GB": 139,
    },

    // ==== Pixel 7 / 7 Pro / 7a / 7a XL ====
    "pixel 7": {
      "128GB": 135,
      "256GB": 159,
      "512GB": 170,
      "1TB": 192,
    },
    "pixel 7 pro": {
      "128GB": 135,
      "256GB": 171,
      "512GB": 184,
      "1TB": 212,
    },
    "pixel 7a": {
      "128GB": 197,
      "256GB": 222,
      "512GB": 245,
    },
    "pixel 7a xl": {
      "128GB": 193,
      "256GB": 221,
      "512GB": 245,
    },

    // ==== iPhone 14 family ====
    "iphone 14": {
      "128GB": 198,
      "256GB": 223,
      "512GB": 246,
    },
    "iphone 14 pro": {
      "128GB": 224,
      "256GB": 237,
      "512GB": 255,
      "1TB": 279,
    },
    "iphone 14 pro max": {
      "128GB": 247,
      "256GB": 265,
      "512GB": 281,
      "1TB": 310,
    },
    "iphone 14 plus": {
      "128GB": 194,
      "256GB": 222,
      "512GB": 246,
    },

    // ==== Galaxy S22 family ====
    "galaxy s22": {
      "128GB": 200,
      "256GB": 224,
      "512GB": 248,
    },
    "galaxy s22+": {
      "128GB": 223,
      "256GB": 239,
      "512GB": 254,
      "1TB": 281,
    },
    "galaxy s22 ultra": {
      "128GB": 246,
      "256GB": 263,
      "512GB": 280,
      "1TB": 308,
    },
    "galaxy s22 fe xl": {
      "128GB": 193,
      "256GB": 221,
      "512GB": 245,
    },

    // ==== iPhone 15 family ====
    "iphone 15": {
      "128GB": 270,
      "256GB": 285,
      "512GB": 300,
    },
    "iphone 15 pro": {
      "128GB": 441,
      "256GB": 458,
      "512GB": 465,
      "1TB": 472,
    },
    "iphone 15 pro max": {
      "256GB": 458,
      "512GB": 465,
      "1TB": 472,
    },
    "iphone 15 plus": {
      "128GB": 270,
      "256GB": 285,
      "512GB": 300,
    },

    // ==== Galaxy S23 family ====
    "galaxy s23": {
      "128GB": 269,
      "256GB": 284,
      "512GB": 299,
    },
    "galaxy s23+": {
      "128GB": 439,
      "256GB": 460,
      "512GB": 463,
      "1TB": 470,
    },
    "galaxy s23 ultra": {
      "256GB": 460,
      "512GB": 463,
      "1TB": 470,
    },
    "galaxy s23 xl": {
      "128GB": 269,
      "256GB": 284,
      "512GB": 299,
    },

    // ==== Pixel 8 / 8 Pro / 8 Pro XL / 8 XL ====
    "pixel 8": {
      "128GB": 269,
      "256GB": 284,
      "512GB": 299,
    },
    "pixel 8 pro": {
      "128GB": 246,
      "256GB": 264,
      "512GB": 280,
      "1TB": 309,
    },
    "pixel 8 pro xl": {
      "256GB": 457,
      "512GB": 464,
      "1TB": 471,
    },
    "pixel 8 xl": {
      "128GB": 269,
      "256GB": 284,
      "512GB": 299,
    },

    // ==== iPhone 16 / Galaxy S24 / Pixel 9 ====
    "iphone 16": {
      "128GB": 441,
      "256GB": 458,
      "512GB": 465,
      "1TB": 472,
    },
    "iphone 16 pro": {
      "128GB": 441,
      "256GB": 458,
      "512GB": 465,
      "1TB": 472,
    },
    "iphone 16 pro max": {
      "128GB": 441,
      "256GB": 458,
      "512GB": 465,
      "1TB": 472,
    },
    "iphone 16 plus": {
      "128GB": 441,
      "256GB": 458,
      "512GB": 465,
      "1TB": 472,
    },
    "iphone 16e": {
      "128GB": 441,
      "256GB": 458,
      "512GB": 465,
      "1TB": 472,
    },

    "galaxy s24": {
      "128GB": 443,
      "256GB": 460,
      "512GB": 467,
      "1TB": 470,
    },

    "pixel 9": {
      "128GB": 441,
      "256GB": 458,
      "512GB": 465,
      "1TB": 472,
    },
  },

  // Your condition reductions (feel free to tweak the multipliers):
  conditionMultiplier: {
    cracked: 0.6, // e.g. -40%
    used: 0.8, // e.g. -20%
    good: 0.9, // e.g. -10%
    great: 1.0, // no reduction
    "": 1.0,
  },
};

const MODEL_KEYS = Object.keys(PRICING.basePrice);

// Simple helper to make the suggestion text look nice (Title Case)
function formatModelLabel(key) {
  return key
    .split(" ")
    .map((w) => (w.length === 0 ? "" : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

function calculateQuote(deviceModel, storage, condition) {
  if (!deviceModel || !condition) return null;

  const normalizedModel = deviceModel.toLowerCase().trim();

  // Find the best matching model key (longest match first)
  const modelKeys = MODEL_KEYS.sort((a, b) => b.length - a.length);

  let matchedModel = null;

  for (const key of modelKeys) {
    if (normalizedModel.includes(key)) {
      matchedModel = key;
      break;
    }
  }

  if (!matchedModel) {
    // No recognised model
    return null;
  }

  const storagePrices = PRICING.basePrice[matchedModel];

  // Get base price for the chosen storage, or fall back to first available
  let basePrice = storagePrices[storage];

  if (!basePrice) {
    const firstAvailable = Object.values(storagePrices)[0];
    basePrice = firstAvailable;
  }

  const conditionMultiplier = PRICING.conditionMultiplier[condition] ?? 1.0;

  const finalQuote = Math.round(basePrice * conditionMultiplier);

  return {
    model: matchedModel,
    storage,
    basePrice,
    conditionMultiplier,
    finalQuote,
  };
}

export default function Quote() {
  const [form, setForm] = useState({
    deviceModel: "",
    storage: "",
    condition: "",
  });

  const [showSuggestions, setShowSuggestions] = useState(false);

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "deviceModel") {
      setShowSuggestions(true);
    }
  };

  const estimatedQuote = useMemo(() => {
    if (!form.deviceModel || !form.condition) return null;
    return calculateQuote(form.deviceModel, form.storage, form.condition);
  }, [form.deviceModel, form.storage, form.condition]);

  // Filter suggestions based on what the user has typed
  const modelSuggestions = useMemo(() => {
    const q = form.deviceModel.toLowerCase().trim();
    if (!q) return [];
    return MODEL_KEYS.filter((key) => key.includes(q)).slice(0, 8);
  }, [form.deviceModel]);

  const handleSuggestionClick = (modelKey) => {
    const label = formatModelLabel(modelKey);
    setForm((prev) => ({
      ...prev,
      deviceModel: label,
    }));
    setShowSuggestions(false);
  };

  return (
    <>
      <Helmet>
        <title>Sell Your Phone — Readtech</title>
        <meta
          name="description"
          content="Get an instant quote for your old or broken phone. We buy all major brands and conditions."
        />
      </Helmet>

      <section className="py-12 md:py-16 bg-gray-50">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold">Sell Your Phone</h1>
          <p className="mt-2 text-gray-600">
            Start typing your phone model, then choose it from the suggestions
            to see an instant price estimate.
          </p>

          <form
            className="mt-8 grid md:grid-cols-2 gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Device model + suggestions */}
            <div className="md:col-span-2 grid gap-1 relative">
              <label className="text-sm">Device model *</label>
              <input
                name="deviceModel"
                value={form.deviceModel}
                onChange={updateField}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                placeholder="e.g., iPhone 14 Pro, Galaxy S23, Pixel 8"
                required
              />

              {/* Autocomplete dropdown */}
              {showSuggestions && modelSuggestions.length > 0 && (
                <div className="mt-1 w-full max-h-56 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg">
                  {modelSuggestions.map((key) => (
                    <button
                      key={key}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSuggestionClick(key);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      {formatModelLabel(key)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Storage */}
            <div className="grid gap-1">
              <label className="text-sm">Storage</label>
              <select
                name="storage"
                value={form.storage}
                onChange={updateField}
                className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
              >
                <option value="">Select storage</option>
                <option value="64GB">64GB</option>
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                <option value="512GB">512GB</option>
                <option value="1TB">1TB</option>
              </select>
            </div>

            {/* Condition */}
            <div className="grid gap-1">
              <label className="text-sm">Condition *</label>
              <select
                name="condition"
                value={form.condition}
                onChange={updateField}
                className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                required
              >
                <option value="">Select condition</option>
                <option value="cracked">Cracked</option>
                <option value="used">Used</option>
                <option value="good">Good</option>
                <option value="great">Great (like new)</option>
              </select>
            </div>

            {/* Estimated Quote box */}
            {estimatedQuote && (
              <div className="md:col-span-2 rounded-2xl border-2 border-brand bg-brand/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      Estimated Quote
                    </h3>
                    <p className="text-4xl font-bold text-brand mt-1">
                      £{estimatedQuote.finalQuote}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      This is an estimate based on the information you’ve
                      entered. The final price is confirmed after we inspect
                      your device.
                    </p>
                  </div>
                  <div className="text-6xl" role="img" aria-label="money">
                    💰
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <details className="text-sm text-gray-600">
                    <summary className="cursor-pointer font-semibold hover:text-brand transition-colors">
                      See price breakdown
                    </summary>
                    <div className="mt-3 space-y-2 pl-4">
                      {estimatedQuote.model && (
                        <div className="flex justify-between">
                          <span>Matched model:</span>
                          <span className="font-medium">
                            {formatModelLabel(estimatedQuote.model)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Base price (Great condition):</span>
                        <span className="font-medium">
                          £{estimatedQuote.basePrice}
                        </span>
                      </div>
                      {estimatedQuote.conditionMultiplier !== 1 && (
                        <div className="flex justify-between">
                          <span>Condition adjustment ({form.condition}):</span>
                          <span className="font-medium">
                            ×{estimatedQuote.conditionMultiplier.toFixed(2)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between pt-2 border-t border-gray-300 font-semibold">
                        <span>Estimated total:</span>
                        <span className="text-brand">
                          £{estimatedQuote.finalQuote}
                        </span>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            )}

            {/* CTA buttons */}
            <div className="md:col-span-2 flex items-center gap-4">
              <Link
                to="/contact"
                className="rounded-2xl bg-brand text-white px-6 py-3 inline-block shadow-sm hover:bg-brand-dark disabled:opacity-50 transition-all"
              >
                Contact us to confirm
              </Link>
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline hover:text-brand transition-colors"
              >
                Or message us on WhatsApp
              </a>
            </div>
          </form>

          {/* What happens next */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold mb-2">📋 What happens next?</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• We confirm your quote via WhatsApp, phone or email</li>
              <li>
                • You’ll get a free postage label or can visit us in-store
              </li>
              <li>
                • Once we verify your device, you’ll receive payment the same
                day
              </li>
              <li>• We securely wipe all data from your phone</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

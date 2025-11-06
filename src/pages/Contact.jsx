import { Helmet } from "@dr.pogodin/react-helmet";
import Container from "../components/Container.jsx";

export default function Contact() {
  const biz = {
    phone: "07000 000000",
    email: "hello@example.com",
    address: "123 High Street, YourTown, YT1 2AB",
    hours: ["Mon–Sat: 10:00–18:00", "Sun: Closed"],
  };

  return (
    <>
      <Helmet>
        <title>Contact — PhoneFlip</title>
        <meta
          name="description"
          content="Find our shop location, opening hours, and ways to get in touch to sell your phone."
        />
      </Helmet>

      <section className="py-12 md:py-16">
        <Container className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Find us</h1>
            <p className="text-gray-700 mt-2">{biz.address}</p>
            {biz.hours.map((h) => (
              <p key={h} className="text-gray-700">
                {h}
              </p>
            ))}
            <p className="text-gray-700 mt-2">Phone: {biz.phone}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={`tel:${biz.phone.replace(/\s/g, "")}`}
                className="rounded-2xl px-4 py-2 border shadow"
              >
                Call
              </a>
              <a
                href={`mailto:${biz.email}`}
                className="rounded-2xl px-4 py-2 border shadow"
              >
                Email
              </a>
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-4 py-2 border shadow"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-soft">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                title="Map"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=123%20High%20Street%20YourTown%20YT1%202AB&output=embed"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Find us on Google Maps.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

import { Helmet } from "@dr.pogodin/react-helmet";
import Container from "../components/Container.jsx";

export default function Contact() {
  const biz = {
    phone: "07000 000000",
    email: "hello@example.com",
  };

  return (
    <>
      <Helmet>
        <title>Contact — Readtech</title>
        <meta
          name="description"
          content="Get in touch with us to sell your phone via phone, email, or WhatsApp."
        />
      </Helmet>

      <section className="py-12 md:py-16 bg-gray-50">
        <Container className="flex justify-center">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm max-w-md w-full">
            <h1 className="text-3xl font-bold">Get in Touch</h1>
            <p className="text-gray-600 mt-4">
              Contact us via phone, email, or WhatsApp to sell your phone.
            </p>
            <div className="mt-6 space-y-3">
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> {biz.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {biz.email}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${biz.phone.replace(/\s/g, "")}`}
                className="rounded-2xl px-4 py-2 border border-gray-300 shadow-sm hover:bg-gray-50 hover:border-brand transition-all"
              >
                Call
              </a>
              <a
                href={`mailto:${biz.email}`}
                className="rounded-2xl px-4 py-2 border border-gray-300 shadow-sm hover:bg-gray-50 hover:border-brand transition-all"
              >
                Email
              </a>
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-4 py-2 border border-gray-300 shadow-sm hover:bg-gray-50 hover:border-brand transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

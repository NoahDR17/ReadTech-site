import Container from "../components/Container.jsx";
export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="mt-2 text-gray-700">We couldn’t find that page.</p>
        <a href="/" className="inline-block mt-6 rounded-2xl bg-black text-white px-6 py-3 shadow">Go home</a>
      </Container>
    </section>
  );
}

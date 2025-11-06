import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-20">
      <Container className="py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} PhoneFlip. All rights reserved.</p>
<div className="flex gap-4">
  <a href="/quote" className="underline hover:text-brand">Sell Your Phone</a>
  <a href="/faq" className="underline hover:text-brand">FAQ</a>
  <a href="/contact" className="underline hover:text-brand">Contact</a>
</div>

      </Container>
    </footer>
  );
}

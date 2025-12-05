import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <Container className="py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Readtech. All rights reserved.</p>
<div className="flex gap-4">
  <a href="/terms-and-conditions" className="underline hover:text-brand transition-colors">Terms and Conditions</a>
  <a href="/quote" className="underline hover:text-brand transition-colors">Sell Your Phone</a>
  <a href="/faq" className="underline hover:text-brand transition-colors">FAQ</a>
  <a href="/contact" className="underline hover:text-brand transition-colors">Contact</a>
</div>

      </Container>
    </footer>
  );
}

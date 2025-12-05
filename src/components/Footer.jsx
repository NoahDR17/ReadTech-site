import { Link } from "react-router-dom";
import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <Container className="py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Readtech. All rights reserved.</p>
<div className="flex gap-4">
  <Link to="/terms-and-conditions" className="underline hover:text-brand transition-colors">Terms and Conditions</Link>
  <Link to="/quote" className="underline hover:text-brand transition-colors">Sell Your Phone</Link>
  <Link to="/faq" className="underline hover:text-brand transition-colors">FAQ</Link>
  <Link to="/contact" className="underline hover:text-brand transition-colors">Contact</Link>
</div>

      </Container>
    </footer>
  );
}

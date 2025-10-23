import { NavLink, Link } from "react-router-dom";
import Container from "./Container.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/quote", label: "Get a quote" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <Container className="py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl tracking-tight">FlipMobile</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `hover:text-black ${isActive ? "text-black font-semibold" : "text-gray-700"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <a
          href="https://wa.me/447000000000"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm bg-brand text-white shadow hover:bg-brand-dark"
        >
          WhatsApp
        </a>
      </Container>
    </header>
  );
}

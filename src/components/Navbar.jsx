import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "./Container.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "What We Buy" },
  { to: "/quote", label: "Sell Your Phone" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
      <Container className="py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl tracking-tight">PhoneFlip</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `hover:text-brand transition-colors ${isActive ? "text-brand font-semibold" : "text-gray-600"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-600 hover:text-brand focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <a
          href="https://wa.me/447000000000"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm bg-brand text-white shadow-sm hover:bg-brand-dark transition-all"
        >
          WhatsApp
        </a>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Container className="py-4">
            <nav className="flex flex-col gap-4">
              {links.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `hover:text-brand transition-colors py-2 ${isActive ? "text-brand font-semibold" : "text-gray-600"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm bg-brand text-white shadow-sm hover:bg-brand-dark transition-all"
              >
                WhatsApp
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

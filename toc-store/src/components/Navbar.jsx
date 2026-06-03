// ─────────────────────────────────────────────
//  Navbar – TOC The Ola Collection
// ─────────────────────────────────────────────
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-toc-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none">
              <span className="font-serif text-2xl md:text-3xl font-light tracking-widest text-toc-charcoal">
                T.O.C
              </span>
              <span className="font-sans text-[9px] tracking-widest-xl text-toc-taupe uppercase hidden sm:block">
                The Ola Collection
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                      isActive ? 'text-toc-charcoal border-b border-toc-charcoal pb-0.5' : 'text-toc-taupe hover:text-toc-charcoal'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Cart & Menu */}
            <div className="flex items-center gap-5">
              <Link to="/cart" className="relative group">
                <svg
                  className="w-5 h-5 text-toc-charcoal group-hover:text-toc-gold transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-toc-charcoal text-toc-cream text-[10px] font-sans w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-1"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-5 h-px bg-toc-charcoal transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-px bg-toc-charcoal transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-px bg-toc-charcoal transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-toc-cream transition-all duration-500 flex flex-col items-center justify-center gap-8 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link to="/" className="flex flex-col items-center leading-none mb-4">
          <span className="font-serif text-4xl font-light tracking-widest text-toc-charcoal">TOC</span>
          <span className="font-sans text-[10px] tracking-widest-xl text-toc-taupe uppercase mt-1">
            The Ola Collection
          </span>
        </Link>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `font-serif text-2xl font-light tracking-wide transition-colors ${
                isActive ? 'text-toc-charcoal' : 'text-toc-sand hover:text-toc-charcoal'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
        <Link
          to="/cart"
          className="font-serif text-2xl font-light tracking-wide text-toc-sand hover:text-toc-charcoal transition-colors"
        >
          Cart {totalItems > 0 && `(${totalItems})`}
        </Link>
      </div>
    </>
  );
};

export default Navbar;

// ─────────────────────────────────────────────
//  Footer – TOC The Ola Collection
// ─────────────────────────────────────────────
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-toc-charcoal text-toc-sand/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-toc-brown/30">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-serif text-4xl font-light tracking-widest text-toc-cream mb-3">T.O.C</p>
            <p className="font-sans text-xs tracking-widest uppercase text-toc-gold mb-4">
              The Ola Collection
            </p>
            <p className="font-sans text-sm leading-relaxed text-toc-sand/60 max-w-xs">
              An online closet made for your space and style. Curated luxury, delivered to you.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-toc-gold mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/shop', label: 'Shop' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
                { to: '/cart', label: 'Cart' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-sans text-sm text-toc-sand/60 hover:text-toc-cream transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-toc-gold mb-5">
              Categories
            </p>
            <ul className="space-y-3">
              {['Aesthetic Items', 'Corporate Wear', 'Sweatshirts', 'Room Decor', 'Accessories'].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      to={`/shop?category=${encodeURIComponent(cat)}`}
                      className="font-sans text-sm text-toc-sand/60 hover:text-toc-cream transition-colors duration-300"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-toc-sand/40">
            © {new Date().getFullYear()} T.O.C – The Ola Collection. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Instagram', 'Twitter', 'Pinterest'].map((social) => (
              <a
                key={social}
                href="#"
                className="font-sans text-xs text-toc-sand/40 hover:text-toc-cream transition-colors duration-300 tracking-wide"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

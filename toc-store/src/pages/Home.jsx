// ─────────────────────────────────────────────
//  Home Page – TOC The Ola Collection
// ─────────────────────────────────────────────
import { Link } from 'react-router-dom';
import { useFeaturedProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { Loader, SectionLabel, SectionTitle, CategoryCard } from '../components/UI';
import { CATEGORIES } from '../utils/mockData';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=85',
];



const Home = () => {
  const { products, loading } = useFeaturedProducts();

  return (
    <div className="min-h-screen bg-toc-linen">
      {/* ── Hero ────────────────────────────────── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-toc-black/70 via-toc-black/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-28 w-full">
          <p className="font-sans text-[10px] tracking-widest-xl uppercase text-toc-gold mb-5 animate-fade-up">
            The Ola Collection
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-toc-cream leading-none mb-6 animate-fade-up max-w-3xl"
            style={{ animationDelay: '0.1s' }}>
            A closet made for your space & style.
          </h1>
          <p className="font-sans text-sm text-toc-cream/70 mb-10 max-w-md animate-fade-up"
            style={{ animationDelay: '0.2s' }}>
            Curated luxury fashion, lifestyle objects, and spaces — thoughtfully assembled for those who know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="inline-block bg-toc-cream text-toc-charcoal font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-toc-gold hover:text-toc-cream transition-colors duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="inline-block border border-toc-cream/50 text-toc-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:border-toc-cream transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-12 bg-toc-cream/30 animate-pulse" />
          <span className="font-sans text-[9px] tracking-widest uppercase text-toc-cream/40 rotate-90 mt-2">
            Scroll
          </span>
        </div>
      </section>

      {/* ── Marquee ────────────────────────────── */}
      <div className="bg-toc-charcoal py-3 overflow-hidden">
        <div className="flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {Array(4).fill(['Aesthetic', 'Luxury', 'Curated', 'Editorial', 'TOC', 'Premium', 'Minimal', 'Refined']).flat().map((word, i) => (
            <span key={i} className="font-serif italic text-toc-gold/60 text-sm flex-shrink-0">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured Products ───────────────────── */}
      <section className="bg-toc-cream max-w-none px-0 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionLabel>Featured</SectionLabel>
            <SectionTitle>Selected pieces</SectionTitle>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase text-toc-taupe hover:text-toc-charcoal transition-colors border-b border-toc-clay pb-0.5 hidden sm:block"
          >
            View all
          </Link>
        </div>

        {loading ? (
          <Loader text="Curating selections…" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block font-sans text-xs tracking-widest uppercase border border-toc-brown text-toc-brown px-10 py-4 hover:bg-toc-charcoal hover:text-toc-cream hover:border-toc-charcoal transition-all duration-300 sm:hidden"
          >
            View all products
          </Link>
        </div>
        </div>
      </section>

      {/* ── Brand Statement ─────────────────────── */}
      <section className="bg-toc-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionLabel>Our philosophy</SectionLabel>
          <blockquote className="font-serif text-3xl md:text-5xl font-light text-toc-cream leading-snug mt-4 mb-8">
            "Style is a language. T.O.C gives you the words."
          </blockquote>
          <div className="w-12 h-px bg-toc-gold mx-auto" />
        </div>
      </section>

      {/* ── Categories ──────────────────────────── */}
      <section className="bg-toc-warm py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <SectionLabel>Shop by category</SectionLabel>
          <SectionTitle>Browse the collection</SectionTitle>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CATEGORIES.slice(0, 5).map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group p-5 border border-toc-sand bg-toc-cream hover:border-toc-clay hover:bg-white hover:shadow-sm transition-all duration-300 text-left"
            >
              <span className="block text-xl mb-3 text-toc-clay group-hover:text-toc-gold transition-colors">
                {cat.emoji}
              </span>
              <p className="font-serif text-sm font-light text-toc-charcoal leading-snug">
                {cat.name}
              </p>
              <p className="font-sans text-[10px] text-toc-taupe mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* ── More Products ───────────────────────── */}
      {products.length > 4 && (
        <section className="bg-toc-linen py-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel>More from T.O.C</SectionLabel>
              <SectionTitle>Continue browsing</SectionTitle>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          </div>
        </section>
      )}

      {/* ── Newsletter ──────────────────────────── */}
      <section className="bg-toc-beige py-16 md:py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <SectionLabel>Stay in the know</SectionLabel>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-toc-charcoal mb-3">
            Join the T.O.C circle
          </h3>
          <p className="font-sans text-sm text-toc-taupe mb-8">
            New arrivals, curated edits, and early access. No noise.
          </p>
          <div className="flex gap-0 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3.5 bg-toc-cream border border-toc-sand font-sans text-sm text-toc-charcoal placeholder-toc-clay focus:outline-none focus:border-toc-taupe transition-colors"
            />
            <button className="bg-toc-charcoal text-toc-cream font-sans text-[10px] tracking-widest uppercase px-5 hover:bg-toc-brown transition-colors duration-300">
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// ─────────────────────────────────────────────
//  About Page – TOC The Ola Collection
// ─────────────────────────────────────────────
import { Link } from 'react-router-dom';
import { SectionLabel } from '../components/UI';

const About = () => {
  return (
    <div className="min-h-screen bg-toc-linen">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85)',
          }}
        />
        <div className="absolute inset-0 bg-toc-charcoal/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <SectionLabel>Est. 2024</SectionLabel>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-toc-cream mt-3">
            About T.O.C
          </h1>
        </div>
      </div>

      {/* Story */}
      <section className="bg-toc-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 mb-20">
          <div className="md:col-span-2">
            <SectionLabel>Our story</SectionLabel>
            <h2 className="font-serif text-3xl font-light text-toc-charcoal leading-snug">
              Made for your space & style.
            </h2>
          </div>
          <div className="md:col-span-3 space-y-5">
            <p className="font-sans text-sm text-toc-taupe leading-relaxed">
              T.O.C — The Ola Collection — was born from a simple belief: that your closet and your space should speak the same language. That the way you dress and the way you live are not separate aesthetics, but one continuous expression of who you are.
            </p>
            <p className="font-sans text-sm text-toc-taupe leading-relaxed">
              We curate each piece — from structured blazers to hand-thrown stoneware — with the same intentionality. Nothing is accidental. Everything earns its place.
            </p>
            <p className="font-sans text-sm text-toc-taupe leading-relaxed">
              T.O.C is for those who live deliberately. Who choose quality over quantity. Who understand that a single, perfect object is worth more than a room full of noise.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 my-16">
          <div className="flex-1 h-px bg-toc-sand" />
          <span className="font-serif text-2xl text-toc-clay">◇</span>
          <div className="flex-1 h-px bg-toc-sand" />
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '✦',
              title: 'Curation',
              desc: 'Every product is chosen. Nothing lands in our collection by accident.',
            },
            {
              icon: '◈',
              title: 'Quality',
              desc: 'We hold our suppliers to the same standards we hold ourselves.',
            },
            {
              icon: '○',
              title: 'Intention',
              desc: 'Buy less. Choose well. Make it last. That is the TOC way.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="text-center py-8 px-4 border border-toc-sand/60 hover:border-toc-clay transition-colors duration-300">
              <span className="block text-2xl text-toc-gold mb-4">{icon}</span>
              <h3 className="font-serif text-xl font-light text-toc-charcoal mb-3">{title}</h3>
              <p className="font-sans text-xs text-toc-taupe leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="bg-toc-charcoal py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <blockquote className="font-serif italic text-3xl md:text-4xl font-light text-toc-cream/90 leading-relaxed mb-8">
            "Your space is a self-portrait. Curate it wisely."
          </blockquote>
          <span className="font-sans text-xs tracking-widests uppercase text-toc-gold">— Ola</span>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-toc-warm py-20 text-center">
        <h2 className="font-serif text-3xl font-light text-toc-charcoal mb-6">
          Ready to begin your collection?
        </h2>
        <Link
          to="/shop"
          className="inline-block font-sans text-xs tracking-widest uppercase bg-toc-charcoal text-toc-cream px-10 py-4 hover:bg-toc-brown transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  );
};

export default About;

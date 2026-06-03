// ─────────────────────────────────────────────
//  Product Detail Page – TOC The Ola Collection
// ─────────────────────────────────────────────
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct } from '../hooks/useProducts';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { Loader, Button, SectionLabel } from '../components/UI';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading } = useProduct(id);
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const related = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return (
    <div className="pt-32 min-h-screen bg-toc-linen">
      <Loader text="Fetching details…" />
    </div>
  );

  if (!product) return (
    <div className="pt-32 min-h-screen bg-toc-linen flex flex-col items-center justify-center gap-4">
      <p className="font-serif text-3xl font-light text-toc-charcoal">Product not found</p>
      <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-toc-taupe hover:text-toc-charcoal border-b border-toc-clay pb-0.5">
        Back to shop
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-toc-linen">
      {/* Breadcrumb */}
      <div className="pt-24 pb-6 px-6 lg:px-12 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 font-sans text-xs text-toc-taupe">
          <Link to="/" className="hover:text-toc-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-toc-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-toc-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-toc-blush overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-toc-clay/40 -z-10 hidden lg:block" />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center py-4 lg:py-12">
            <SectionLabel>{product.category}</SectionLabel>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-toc-charcoal leading-tight mb-4">
              {product.name}
            </h1>

        <p className="font-sans text-2xl text-toc-brown mb-4">
  {formatPrice(product.price)}
</p>

<div className="flex flex-wrap gap-2 mb-6">
  {product.featured && (
    <span className="px-3 py-1 bg-toc-gold/20 text-toc-brown text-xs uppercase tracking-widest rounded-full">
      Featured
    </span>
  )}


{/* INSTOCK COMMENTED OUT FOR NOW */}
  <span
    className={`px-3 py-1 text-xs uppercase tracking-widest rounded-full ${
      product.inStock
        ? 'bg-green-100 text-green-700'
        : 'bg-red-100 text-red-700'
    }`}
  >
    {product.inStock ? 'In Stock' : 'Out of Stock'}
  </span>
</div>

<div className="w-8 h-px bg-toc-clay mb-8" />

            <p className="font-sans text-sm text-toc-taupe leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-xs tracking-widest uppercase text-toc-taupe">Qty</span>
              <div className="flex items-center border border-toc-sand bg-toc-cream">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-toc-taupe hover:text-toc-charcoal text-lg transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-toc-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-toc-taupe hover:text-toc-charcoal text-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAdd}
              size="lg"
              fullWidth
              variant={added ? 'gold' : 'primary'}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </Button>

            <Link
              to="/cart"
              className="mt-3 font-sans text-xs tracking-widest uppercase text-center text-toc-taupe hover:text-toc-charcoal transition-colors py-2"
            >
              View cart
            </Link>

            {/* Details rows */}
            <div className="mt-10 border-t border-toc-sand pt-6 space-y-4">
              {[
                { label: 'Care', detail: 'Dry clean or gentle machine wash. Do not tumble dry.' },
                { label: 'Delivery', detail: 'Standard 3–5 business days. Express available at checkout.' },
                { label: 'Returns', detail: '14-day return window. Unworn, tags attached.' },
              ].map(({ label, detail }) => (
                <div key={label} className="flex gap-6 py-2 border-b border-toc-sand">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-toc-gold w-16 flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="font-sans text-xs text-toc-taupe leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-toc-warm py-16 md:py-24 border-t border-toc-sand">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <SectionLabel>You may also like</SectionLabel>
            <h2 className="font-serif text-3xl font-light text-toc-charcoal">Related pieces</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;

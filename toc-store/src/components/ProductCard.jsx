// ─────────────────────────────────────────────
//  ProductCard – TOC The Ola Collection
// ─────────────────────────────────────────────
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  
  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-toc-beige aspect-[3/4] mb-4">
          {!imageError ? (
            <><img
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 flex items-center justify-center bg-toc-charcoal/0 group-hover:bg-toc-charcoal/20 transition-all duration-500">
                <p className="text-toc-cream text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to explore
                </p>
              </div></>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-toc-sand">
              <span className="font-serif text-4xl">TOC</span>
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-toc-charcoal/0 group-hover:bg-toc-charcoal/10 transition-all duration-500" />

          {/* Quick add button */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                added
                  ? 'bg-toc-gold text-toc-cream'
                  : 'bg-toc-charcoal text-toc-cream hover:bg-toc-brown'
              }`}
            >
              {added ? '✓ Added to cart' : 'Add to cart'}
            </button>
          </div>

          {/* Category tag */}
          <div className="absolute top-3 left-3">
            <span className="bg-toc-cream/90 backdrop-blur-sm font-sans text-[9px] tracking-widest uppercase text-toc-taupe px-2 py-1">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-1">
          <h3 className="font-serif text-lg font-light text-toc-charcoal leading-snug group-hover:text-toc-brown transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-toc-taupe mt-1">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

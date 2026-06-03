// ─────────────────────────────────────────────
//  Cart Page – TOC The Ola Collection
// ─────────────────────────────────────────────
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button, SectionLabel } from '../components/UI';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-toc-linen flex flex-col items-center justify-center gap-6 px-6">
        <div className="text-toc-sand text-6xl font-serif">○</div>
        <h1 className="font-serif text-3xl font-light text-toc-charcoal">Your cart is empty</h1>
        <p className="font-sans text-sm text-toc-taupe text-center max-w-xs">
          Nothing in your cart yet. Start browsing to find pieces you love.
        </p>
        <Link
          to="/shop"
          className="font-sans text-xs tracking-widest uppercase border border-toc-brown text-toc-brown px-8 py-3.5 hover:bg-toc-charcoal hover:text-toc-cream hover:border-toc-charcoal transition-all duration-300 mt-2"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-toc-linen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-28 pb-20">
        <SectionLabel>Your selection</SectionLabel>
        <div className="flex items-baseline justify-between mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-toc-charcoal">
            Cart <span className="text-toc-sand text-3xl">({totalItems})</span>
          </h1>
          <button
            onClick={clearCart}
            className="font-sans text-xs tracking-widest uppercase text-toc-taupe hover:text-toc-charcoal transition-colors"
          >
            Clear all
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 border-b border-toc-beige pb-6 group"
              >
                {/* Image */}
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <div className="w-24 h-32 md:w-28 md:h-36 bg-toc-beige overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <span className="font-sans text-[9px] tracking-widest uppercase text-toc-gold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-light text-toc-charcoal mt-0.5">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-end justify-between">
                    {/* Quantity */}
                    <div className="flex items-center border border-toc-beige">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-toc-taupe hover:text-toc-charcoal text-base transition-colors"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-sans text-xs text-toc-charcoal">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-toc-taupe hover:text-toc-charcoal text-base transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-sans text-sm text-toc-charcoal">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="font-sans text-[10px] text-toc-taupe">
                          {formatPrice(item.price)} each
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Remove */}
<button
  onClick={() => removeFromCart(item.id)}
  className="self-start mt-1 px-2 py-1 text-[10px] tracking-widest uppercase border border-toc-sand text-toc-taupe hover:text-red-500 hover:border-red-300 transition-all duration-300 rounded-full">
  Remove from cart
</button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-toc-beige border border-toc-sand p-8 sticky top-28">
              <h2 className="font-serif text-xl font-light text-toc-charcoal mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="font-sans text-toc-taupe">
                      {item.name} <span className="text-toc-clay">×{item.quantity}</span>
                    </span>
                    <span className="font-sans text-toc-charcoal">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-toc-sand pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-sans text-xs tracking-widest uppercase text-toc-taupe">Subtotal</span>
                  <span className="font-sans text-toc-charcoal font-medium">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-sans text-xs text-toc-taupe">Shipping</span>
                  <span className="font-sans text-xs text-toc-taupe">Calculated at checkout</span>
                </div>
              </div>

              <Button fullWidth size="lg">
                Proceed to Checkout
              </Button>

              <Link
                to="/shop"
                className="block text-center font-sans text-xs tracking-widest uppercase text-toc-taupe hover:text-toc-charcoal transition-colors mt-4 py-2"
              >
                Continue Shopping
              </Link>

              {/* Trust signals */}
              <div className="mt-8 pt-6 border-t border-toc-sand space-y-2">
                {['Secure checkout', 'Free returns within 14 days', 'Authentic products only'].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="text-toc-gold text-xs">✓</span>
                    <span className="font-sans text-xs text-toc-taupe">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

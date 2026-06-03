// ─────────────────────────────────────────────
//  App.jsx – TOC The Ola Collection
// ─────────────────────────────────────────────
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return null;
};

function AppRoutes() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-toc-cream flex flex-col items-center justify-center gap-6">
                <p className="font-serif text-8xl font-light text-toc-sand">404</p>
                <h1 className="font-serif text-2xl font-light text-toc-charcoal">Page not found</h1>
                <a href="/" className="font-sans text-xs tracking-widest uppercase text-toc-taupe hover:text-toc-charcoal border-b border-toc-sand pb-0.5">
                  Go home
                </a>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

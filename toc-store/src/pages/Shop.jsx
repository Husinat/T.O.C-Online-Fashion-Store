// ─────────────────────────────────────────────
//  Shop Page – TOC The Ola Collection
// ─────────────────────────────────────────────
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { Loader, SearchBar, SectionLabel } from '../components/UI';
import { CATEGORIES } from '../utils/mockData';

const ALL = 'All';

const Shop = () => {
  const { products, loading } = useProducts();
  console.log("SHOP PRODUCTS COUNT:", products.length);
console.log("SHOP PRODUCTS:", products);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || ALL);
  const [sortBy, setSortBy] = useState('default');

  // Sync category from URL params
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    if (cat === ALL) {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== ALL) {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [products, activeCategory, search, sortBy]);

  const allCategories = [ALL, ...CATEGORIES.map((c) => c.name)];

  return (
    <div className="min-h-screen bg-toc-linen">
      {/* Header */}
      <div className="pt-28 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <SectionLabel>The Ola Collection</SectionLabel>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-toc-charcoal">Shop</h1>
        <p className="font-sans text-sm text-toc-taupe mt-2">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          {activeCategory !== ALL && ` in ${activeCategory}`}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {/* Search + Sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} placeholder="Search by name or category…" />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-toc-sand bg-toc-cream font-sans text-xs tracking-wide text-toc-taupe px-4 py-3 focus:outline-none focus:border-toc-taupe cursor-pointer"
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A–Z</option>
          </select>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`font-sans text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-toc-brown text-toc-cream border-toc-brown'
                  : 'border-toc-sand text-toc-taupe hover:border-toc-clay hover:text-toc-brown bg-toc-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <Loader text="Loading collection…" />
        ) : filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl font-light text-toc-sand mb-3">No pieces found</p>
            <p className="font-sans text-sm text-toc-taupe">Try adjusting your search or filters.</p>
            <button
              onClick={() => { setSearch(''); handleCategoryClick(ALL); }}
              className="mt-6 font-sans text-xs tracking-widest uppercase border border-toc-brown text-toc-brown px-6 py-3 hover:bg-toc-charcoal hover:text-toc-cream hover:border-toc-charcoal transition-all duration-300"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product}
               />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;

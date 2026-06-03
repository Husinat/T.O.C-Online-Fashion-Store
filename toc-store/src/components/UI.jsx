// ─────────────────────────────────────────────
//  Shared UI Components
// ─────────────────────────────────────────────

// Loader
export const Loader = ({ text = 'Loading…' }) => (
  <div className="flex flex-col items-center justify-center py-24 gap-5">
    <div className="relative w-10 h-10">
      <div className="absolute inset-0 border border-toc-sand rounded-full animate-ping opacity-30" />
      <div className="absolute inset-1 border border-toc-taupe rounded-full animate-spin border-t-transparent" />
    </div>
    <p className="font-sans text-xs tracking-widest uppercase text-toc-taupe">{text}</p>
  </div>
);

// Button
export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const base =
    'font-sans tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-toc-charcoal text-toc-cream hover:bg-toc-brown',
    outline: 'border border-toc-charcoal text-toc-charcoal hover:bg-toc-charcoal hover:text-toc-cream',
    ghost: 'text-toc-taupe hover:text-toc-charcoal',
    gold: 'bg-toc-gold text-toc-cream hover:bg-toc-brown',
  };

  const sizes = {
    sm: 'text-[10px] px-4 py-2',
    md: 'text-xs px-6 py-3.5',
    lg: 'text-xs px-10 py-4',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

// SearchBar
export const SearchBar = ({ value, onChange, placeholder = 'Search products…' }) => (
  <div className="relative">
    <svg
      className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-toc-taupe"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z"
      />
    </svg>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-11 pr-4 py-3 bg-white border border-toc-beige font-sans text-sm text-toc-charcoal placeholder-toc-sand focus:outline-none focus:border-toc-taupe transition-colors duration-300"
    />
    {value && (
      <button
        onClick={() => onChange('')}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-toc-taupe hover:text-toc-charcoal"
      >
        ✕
      </button>
    )}
  </div>
);

// CategoryCard
export const CategoryCard = ({ category, onClick, active }) => (
  <button
    onClick={() => onClick(category.name)}
    className={`group p-5 text-left transition-all duration-300 border ${
      active
        ? 'border-toc-charcoal bg-toc-charcoal text-toc-cream'
        : 'border-toc-beige bg-white hover:border-toc-taupe'
    }`}
  >
    <span
      className={`block text-xl mb-2 ${active ? 'text-toc-gold' : 'text-toc-sand'}`}
    >
      {category.emoji}
    </span>
    <p
      className={`font-serif text-sm font-light ${
        active ? 'text-toc-cream' : 'text-toc-charcoal'
      }`}
    >
      {category.name}
    </p>
  </button>
);

// SectionLabel
export const SectionLabel = ({ children }) => (
  <p className="font-sans text-[10px] tracking-widest-xl uppercase text-toc-gold mb-3">{children}</p>
);

// SectionTitle
export const SectionTitle = ({ children, light }) => (
  <h2
    className={`font-serif text-3xl md:text-4xl font-light leading-tight ${
      light ? 'text-toc-cream' : 'text-toc-charcoal'
    }`}
  >
    {children}
  </h2>
);

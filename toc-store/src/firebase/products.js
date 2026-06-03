// ─────────────────────────────────────────────
//  Firestore Product Services
// ─────────────────────────────────────────────
import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebaseConfig';

const PRODUCTS_COLLECTION = 'products';

// Fetch all products
export const getAllProducts = async () => {
  try {
    const q = query(collection(db, PRODUCTS_COLLECTION), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Fetch products by category
export const getProductsByCategory = async (category) => {
  try {
    const q = query(
      collection(db, PRODUCTS_COLLECTION),
      where('category', '==', category)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};

// Fetch single product by ID
export const getProductById = async (id) => {
  try {
    const docRef = doc(db, PRODUCTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

// Fetch featured products (first 6)
export const getFeaturedProducts = async () => {
  console.log("🔥 getFeaturedProducts WAS CALLED");

  const snapshot = await getDocs(collection(db, "products"));

  console.log("🔥 FEATURED SNAPSHOT SIZE:", snapshot.size);

  console.log(
    "🔥 FEATURED DATA:",
    snapshot.docs.map(doc => doc.data())
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Seed sample products (run once from Firebase Console or a seed script)
export const seedProducts = async () => {
const sampleProducts = [
  {
    name: "Butterfly LED Light",
    price: 12000,
    category: "Room Decor",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "A delicate butterfly-shaped ambient light designed to create a warm, luxurious atmosphere. Perfect for bedside styling and aesthetic spaces.",
    featured: true,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Velvet Touch Hand Cream",
    price: 4500,
    category: "Aesthetic Items",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "Rich hydration wrapped in elegance. Leaves hands soft, nourished, and delicately scented throughout the day.",
    featured: true,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Executive Palm Trousers",
    price: 18500,
    category: "Corporate Wear",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "A refined wardrobe essential tailored for confidence and sophistication. Designed for effortless transitions between work and leisure.",
    featured: true,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Luxury Lip Balm Collection",
    price: 6500,
    category: "Aesthetic Items",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "A curated set of nourishing lip balms crafted to keep lips soft, smooth, and beautifully moisturized.",
    featured: true,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Crystal Perfume Bottle",
    price: 9500,
    category: "Fancy Bottles",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "An elegant decorative perfume bottle designed to elevate your vanity with timeless sophistication.",
    featured: false,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Nordic Decorative Vase",
    price: 13500,
    category: "Room Decor",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "Minimalist luxury inspired by modern interiors. A statement piece for shelves, desks, and coffee tables.",
    featured: false,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Glow-In-The-Dark Moon Lamp",
    price: 15000,
    category: "Room Decor",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "A calming moon-inspired lamp that brings a dreamy glow to your bedroom after sunset.",
    featured: true,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Premium Tongue Scraper",
    price: 3000,
    category: "Aesthetic Items",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "An elegant self-care essential crafted for freshness and a refined daily wellness routine.",
    featured: false,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Marble Brush Holder",
    price: 7000,
    category: "Room Decor",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "Beautifully crafted to keep your beauty tools organized while complementing modern interiors.",
    featured: false,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Luxury Sheet Face Mask Set",
    price: 5500,
    category: "Aesthetic Items",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "A collection of rejuvenating face masks designed to leave skin refreshed, radiant, and deeply hydrated.",
    featured: true,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Amber Oud Scented Candle",
    price: 8500,
    category: "Scented Candles",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "A sophisticated blend of amber and oud crafted to create a rich and inviting atmosphere.",
    featured: true,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Minimalist Wall Collage Set",
    price: 9500,
    category: "Room Decor",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "Curated artwork prints designed to transform blank walls into a stylish visual statement.",
    featured: false,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Designer Acrylic Key Holder",
    price: 6000,
    category: "Accessories",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "A chic everyday essential that keeps keys organized while adding elegance to your accessories.",
    featured: false,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Portable Mini Fan",
    price: 7500,
    category: "Aesthetic Items",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "Compact, stylish, and practical. Designed to keep you cool while maintaining a sleek aesthetic.",
    featured: true,
    inStock: true,
    createdAt: serverTimestamp(),
  },
  {
    name: "Luxury Vanity Bottle Set",
    price: 14000,
    category: "Fancy Bottles",
    image: "https://i.pinimg.com/736x/ef/c6/d4/efc6d433014f2f70f4cffd04fc14d007.jpg",
    description: "Decorative refillable bottles crafted to bring elegance and organization to your beauty space.",
    featured: false,
    inStock: true,
    createdAt: serverTimestamp(),
  }
];

  for (const product of sampleProducts) {
    await addDoc(collection(db, PRODUCTS_COLLECTION), product);
  }
  console.log('✅ Products seeded to Firestore!');
};

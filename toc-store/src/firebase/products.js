import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { MOCK_PRODUCTS } from '../utils/mockData';

const PRODUCTS_COLLECTION = 'products';

const withStockDefaults = (product) => ({
  inStock: true,
  ...product,
});

const mockProducts = MOCK_PRODUCTS.map(withStockDefaults);

export const getAllProducts = async () => {
  if (!db) return mockProducts;

  try {
    const productsQuery = query(collection(db, PRODUCTS_COLLECTION), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(productsQuery);
    return snapshot.docs.map((productDoc) => ({ id: productDoc.id, ...productDoc.data() }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return mockProducts;
  }
};

export const getProductsByCategory = async (category) => {
  const fallback = mockProducts.filter((product) => product.category === category);
  if (!db) return fallback;

  try {
    const productsQuery = query(
      collection(db, PRODUCTS_COLLECTION),
      where('category', '==', category)
    );
    const snapshot = await getDocs(productsQuery);
    return snapshot.docs.map((productDoc) => ({ id: productDoc.id, ...productDoc.data() }));
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return fallback;
  }
};

export const getProductById = async (id) => {
  const fallback = mockProducts.find((product) => product.id === id) || null;
  if (!db) return fallback;

  try {
    const productRef = doc(db, PRODUCTS_COLLECTION, id);
    const productSnap = await getDoc(productRef);
    return productSnap.exists() ? { id: productSnap.id, ...productSnap.data() } : fallback;
  } catch (error) {
    console.error('Error fetching product:', error);
    return fallback;
  }
};

export const getFeaturedProducts = async () => {
  const fallback = mockProducts.filter((product) => product.featured);
  if (!db) return fallback;

  try {
    const snapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
    return snapshot.docs
      .map((productDoc) => ({ id: productDoc.id, ...productDoc.data() }))
      .filter((product) => product.featured);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return fallback;
  }
};

export const seedProducts = async () => {
  if (!db) {
    throw new Error('Firebase is not configured. Add valid VITE_FIREBASE_* variables first.');
  }

  for (const product of mockProducts) {
    const { id, ...productData } = product;
    await addDoc(collection(db, PRODUCTS_COLLECTION), {
      ...productData,
      createdAt: serverTimestamp(),
    });
  }
};

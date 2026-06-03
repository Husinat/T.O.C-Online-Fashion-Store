import { useState, useEffect } from 'react';
import {
  getAllProducts,
  getFeaturedProducts,
  getProductById,
  getProductsByCategory,
} from '../firebase/products';

// ───────── ALL PRODUCTS ─────────
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return { products, loading };
};

// ───────── FEATURED ─────────
export const useFeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const data = await getFeaturedProducts();
        setProducts(data);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return { products, loading };
};

// ───────── SINGLE PRODUCT ─────────
export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetch = async () => {
      setLoading(true);
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [id]);

  return { product, loading };
};

// ───────── CATEGORY ─────────
export const useProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const data = category
          ? await getProductsByCategory(category)
          : await getAllProducts();

        setProducts(data);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [category]);

  return { products, loading };
};
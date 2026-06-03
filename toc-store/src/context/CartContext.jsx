// ─────────────────────────────────────────────
//  Cart Context – TOC The Ola Collection
// ─────────────────────────────────────────────
import { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'toc_cart';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.payload.id) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'LOAD_CART':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
useEffect(() => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);

    if (saved) {
      dispatch({
        type: 'LOAD_CART',
        payload: JSON.parse(saved),
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    setLoaded(true);
  }
}, []);


  // Persist to localStorage on change
useEffect(() => {
  if (!loaded) return;

  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(state.items)
  );
}, [state.items, loaded]);



  const addToCart = (product) => dispatch({ type: 'ADD_ITEM', payload: product });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

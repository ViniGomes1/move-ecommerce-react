import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  const addItem = (item) => {
    const { id, name, price, image, size, color, quantity = 1 } = item;

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === id && cartItem.size === size && cartItem.color === color,
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === id && cartItem.size === size && cartItem.color === color
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        );
      }

      return [...currentCart, { id, name, price, image, size, color, quantity }];
    });
  };

  const updateQuantity = (id, size, color, nextQuantity) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id && item.size === size && item.color === color
            ? { ...item, quantity: Math.max(0, Number(nextQuantity) || 0) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id, size, color) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => !(item.id === id && item.size === size && item.color === color),
      ),
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  const shipping = cart.length > 0 ? 25 : 0;
  const total = subtotal + shipping;

  const checkout = () => {
    if (!cart.length) return;

    const orderId = `MOVE-${Date.now().toString().slice(-6)}`;
    setLastOrder({
      orderId,
      total,
      items: cart.reduce((sum, item) => sum + item.quantity, 0),
      date: new Date().toLocaleString('pt-BR'),
    });
    setCart([]);
    setIsCartOpen(false);
  };

  const value = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    cartCount,
    subtotal,
    shipping,
    total,
    isCartOpen,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    checkout,
    lastOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

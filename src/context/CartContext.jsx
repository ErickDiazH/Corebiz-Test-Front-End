import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(() => {
    /* verifica si el localStorage esta disponible */
    try {
      const localStorageProductsCount =
        localStorage.getItem("cartProductsCount");
      return localStorageProductsCount
        ? JSON.parse(localStorageProductsCount)
        : 0;
    } catch (error) {
      return 0;
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProductsCount", JSON.stringify(cartItemsCount));
  }, [cartItemsCount]);

  const addProductToCart = () => {
    setCartItemsCount(cartItemsCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartItemsCount, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

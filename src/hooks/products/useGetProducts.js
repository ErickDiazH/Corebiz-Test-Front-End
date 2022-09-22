import { getProductsService } from "@/services/productsServices";
import { useState, useEffect } from "react";
export default () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await getProductsService();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
};

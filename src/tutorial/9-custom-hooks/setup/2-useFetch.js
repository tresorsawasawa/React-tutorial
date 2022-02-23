import { useState, useEffect } from 'react';

const url = 'https://course-api.com/javascript-store-products';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { loading, products };
};

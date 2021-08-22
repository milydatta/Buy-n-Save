import Banner from 'components/home/Banner';
import React, { useState, useEffect } from 'react';
import Products from 'components/home/Products';
import { IProduct } from 'types';
import productService from 'services/productService';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    productService.getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;

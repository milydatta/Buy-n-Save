import Banner from 'components/home/Banner';
import React from 'react';
import Products from 'components/home/Products';
import productService from 'services/productService';
import useAsync from 'hooks/useAsync';

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   productService.getProducts().then((res) => setProducts(res));
  // }, []);

  const { data, isLoading } = useAsync(productService.getProducts);

  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
    </div>
  );
};

export default Home;

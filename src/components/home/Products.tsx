import Product from 'components/common/Product';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { IProduct } from 'types';

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-5">Latest Products</h2>
        <Row>
          {products.map((product: IProduct) => (
            <Product key={product._id} product={product} />
          ))}
          {/* //    <Product/>
           
        //    <Product/>
        //    <Product/>
        //    <Product/>
        //    <Product/>
        //    <Product/>
        //    <Product/> */}
        </Row>
      </Container>
    </div>
  );
};

export default Products;

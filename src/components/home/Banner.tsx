import React from 'react';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import banner1 from 'assets/images/banner1.jpg';
import banner2 from 'assets/images/banner2.jpg';
import banner3 from 'assets/images/banner3.jpg';

const Banner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={9} className="mt-2">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner3}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

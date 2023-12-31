import { Row, Col } from 'react-bootstrap';

import { sampleProducts } from '../data';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Row>
      {sampleProducts.map((product) => (
        <Col sm={6} md={4} lg={3} key={product.slug}>
          <Link to={'/product/' + product.slug}>
            <img src={product.image} alt={product.name} className='product-image' />
            <h2>{product.name} </h2>
            <p>${product.price} </p>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default Homepage;

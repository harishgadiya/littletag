import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.scss';

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to={`listing?gender=male`}>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0060/7852/9602/files/Buy-Mens-Fashion-Clothing_1024x1024.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Buy Mens Wear</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`listing?gender=female`}>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0060/7852/9602/files/Women_Fashion_1024x1024.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Shop womens trendy wear</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;

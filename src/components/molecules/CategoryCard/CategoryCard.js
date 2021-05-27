import { Link } from 'react-router-dom';
import { Card, Image, Title } from '../../atoms';

import './categoryCard.scss';

const CategoryCard = ({ image, link }) => {
  return (
    <Card className="category-card">
      <Link to={link}>
        <Image
          className="product-image"
          {...{ src: image, alt: 'pics' }}
        />
        <Title {...{ text: 'Product Title' }} />
      </Link>
    </Card>
  );
};

export default CategoryCard;

import { Link } from 'react-router-dom';
import { Card, Image, Title } from '../../atoms';

import './categoryCard.scss';

const CategoryCard = ({ image, link, title, className }) => {
  return (
    <Card className={`category-card ${className}`}>
      <Link to={link} className="link-wrapper">
        <Image className="product-image" {...{ src: image, alt: 'pics' }} />
        <Title {...{ text: title }} />
      </Link>
    </Card>
  );
};

export default CategoryCard;

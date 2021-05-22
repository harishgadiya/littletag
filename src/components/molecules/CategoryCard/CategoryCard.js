import { Card, Image, Title } from '../../atoms';

import './categoryCard.scss';

const CategoryCard = () => {
  return (
    <Card className='category-card'>
      <Image
        className='product-image'
        {...{ src: 'https://picsum.photos/seed/picsum/260/325', alt: 'pics' }}
      />
      <Title {...{ text: 'Product Title' }} />
    </Card>
  );
};

export default CategoryCard;

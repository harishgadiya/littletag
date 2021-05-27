import { Button } from '../../atoms';
import { CategoryCard } from '../../molecules';
import './categoryProducts.scss';

const CategoryProducts = ({ heading, cards }) => {
  return (
    <div className="category-products">
      <div className="category-header">
        <h2>{heading}</h2>
        <Button
          {...{ type: 'link', href: '/listing', text: 'SEE ALL' }}
        />
      </div>
      <div className="cards">
        {cards.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

import { Button } from '../../atoms';
import { CategoryCard } from '../../molecules';
import './categoryProducts.scss';

const CategoryProducts = ({ heading, cards }) => {
  return (
    <div className="category-products">
      <div className="category-header my-3">
        <h2>{heading}</h2>
        <Button {...{ type: 'link', href: '/listing', text: 'SEE ALL' }} />
      </div>
      <div className="cards row row-cols-lg-6 row-cols-md-4 row-cols-2 gy-2 gy-md-3">
        {cards.map((item, index) => (
          <CategoryCard className="col text-center" key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

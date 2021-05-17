import { Button } from '../../atoms';
import { CategoryCard } from '../../molecules';
import './index.scss';

const CategoryProducts = ({ heading, cards }) => {
  return (
    <div className='category-products'>
      <div className='category-header'>
        <h2>{heading}</h2>
        <Button {...{ type: 'link', text: 'SEE ALL' }} />
      </div>
      <div className='cards'>
        {cards.map((item) => (
          <CategoryCard />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

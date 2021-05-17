import { Button } from '../../atoms';
import { ProductCard } from '../../molecules';
import './index.scss';

const TrendingProducts = ({ heading, cards }) => {
  return (
    <div className='trending-products'>
      <div className='trending-header'>
        <h2>{heading}</h2>
        <Button {...{ type: 'link', text: 'SEE ALL' }} />
      </div>
      <div className='cards'>
        {cards.map((item, index) => (
          <ProductCard key={index} type='trending' {...item} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

import { Button } from '../../atoms';
import { ProductCard } from '../../molecules';
import { ProductCardItems } from '../../molecules/ProductCard';
import './trendingProducts.scss';

const TrendingProducts = ({ heading, cards }) => {
  return (
    <div className="trending-products">
      <div className="trending-header">
        <h2>{heading}</h2>
        <Button {...{ type: 'link', text: 'SEE ALL' }} />
      </div>
      <div className="cards row">
        {cards?.map((item, index) => (
          <ProductCardItems
            key={item?.product?.id}
            className="col-lg-3"
            key={index}
            type="trending"
            {...item}
            {...item.product}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

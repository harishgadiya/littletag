import { Button } from '../../atoms';
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
            key={item?.product?.wishlistId}
            className="col-lg-3"
            key={index}
            type="trending"
            {...item}
            {...item.product}
          />
        ))}
        {!cards ||
          (cards.length < 1 && (
            <div className="m-4 p-4 d-flex justify-content-center">
              <h4>No products are marked as wishlist</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

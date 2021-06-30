import { PAGE_NAMES } from '../../../utils/constants';
import { Button } from '../../atoms';
import { ProductCardItems } from '../../molecules/ProductCard';
import './trendingProducts.scss';

const TrendingProducts = ({ heading, cards, page }) => {
  return (
    <div className="trending-products">
      <div className="trending-header  my-3">
        <h2>{heading}</h2>
        {page !== PAGE_NAMES.WISHLIST && <Button {...{ type: 'link', text: 'SEE ALL' }} />}
      </div>
      <div className="cards row  row-cols-lg-6 row-cols-md-4 row-cols-2 gy-2 gy-md-3">
        {cards?.map((item, index) => (
          <ProductCardItems
            key={item?.product?.wishlistId}
            className="col"
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

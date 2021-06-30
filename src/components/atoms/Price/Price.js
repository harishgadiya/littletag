import './price.scss';

const Price = ({ currentPrice, previousPrice, className, showDiscount, ...other }) => {
  const discountPercent = ((previousPrice - currentPrice) / previousPrice) * 100;

  return (
    <div className={className}>
      <div className="price" {...other}>
        <p className="current">Rs. {currentPrice}</p>
        {previousPrice && currentPrice !== previousPrice && (
          <div className="wrapper">
            <span className="previous">Rs. {previousPrice}</span>
            {showDiscount && <div className="discountPercent">({discountPercent?.toFixed()} % OFF)</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;

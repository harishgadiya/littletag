import './index.scss';

const Price = ({ currentPrice, previousPrice, className, ...other }) => {
  return (
    <div className={`price ${className}`} {...other}>
      <p className='current'>Rs. {currentPrice}</p>
      {previousPrice && <span className='previous'>{previousPrice}</span>}
    </div>
  );
};

export default Price;

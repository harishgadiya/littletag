import './card.scss';

const Card = ({ children, className }) => {
  return <div className={`little-card ${className}`}>{children}</div>;
};

export default Card;

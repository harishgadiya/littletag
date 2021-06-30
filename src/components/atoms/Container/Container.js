import './container.scss';

const Container = ({ children, className }) => {
  return <div className={`litle-container ${className}`}>{children}</div>;
};

export default Container;

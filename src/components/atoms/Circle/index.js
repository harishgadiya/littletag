import './index.scss';

const Circle = ({ text, className, ...other }) => {
  return (
    <div className={`circle ${className}`} {...other}>
      <span>{text}</span>
    </div>
  );
};

export default Circle;

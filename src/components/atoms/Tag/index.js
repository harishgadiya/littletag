import './index.scss';

const Title = ({ text, className, ...other }) => {
  return (
    <span className={`tag ${className}`} {...other}>
      {text}
    </span>
  );
};

export default Title;

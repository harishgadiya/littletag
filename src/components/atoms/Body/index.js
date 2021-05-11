import './index.scss';

const Body = ({ text, className, ...other }) => {
  return (
    <p className={`body-copy ${className}`} {...other}>
      {text}
    </p>
  );
};

export default Body;

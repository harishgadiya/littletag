import './title.scss';

const Title = ({ text, className, ...other }) => {
  return (
    <p className={`title ${className}`} {...other}>
      {text}
    </p>
  );
};

export default Title;

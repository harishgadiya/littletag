import './title.scss';

const Title = ({ text, className, component = 'p', ...other }) => {
  const CustomTag = component;
  return (
    <CustomTag className={`title ${className}`} {...other}>
      {text}
    </CustomTag>
  );
};

export default Title;

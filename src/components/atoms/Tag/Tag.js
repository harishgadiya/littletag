import './tag.scss';

const Tag = ({ text, className, ...other }) => {
  return (
    <span className={`tag ${className}`} {...other}>
      {text}
    </span>
  );
};

export default Tag;

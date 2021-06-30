import './button.scss';

const Button = ({ text, className = '', type = 'filled', ...other }) => {
  if (type === 'link') {
    return (
      <a className={`link ${className}`} {...other}>
        {text}
      </a>
    );
  }
  return (
    <button className={`little-tags-button button ${type} ${className}`} {...other}>
      {text}
    </button>
  );
};

export default Button;

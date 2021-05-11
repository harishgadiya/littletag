import "./index.scss";

const Button = ({ text, className, type = "filled", onClick, ...other }) => {
  console.log('sdfas')
	return (
		<button className={`button ${type} ${className}`} onClick={onClick} {...other}>
			{text}
		</button>
	);
};

export default Button;

import './textInput.scss';

const TextInput = ({ text = '', label, className, ...other }) => {
  const onChange = () => {};
  return (
    <div className={`input-text ${className}`}>
      {label && <h5>{label}</h5>}
      <input value={text} onChange={onChange} {...other} />
    </div>
  );
};

export default TextInput;

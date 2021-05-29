import './textInput.scss';

const TextInput = ({ text, label, ...other }) => {
  return (
    <div className='input-text'>
      {label && <h5>{label}</h5>}
      <input value={text} {...other} />
    </div>
  );
};

export default TextInput;

import './index.scss';

const TextInput = ({ text, ...other }) => {
  return (
    <div className='input-text'>
      <input value={text} {...other} />
    </div>
  );
};

export default TextInput;

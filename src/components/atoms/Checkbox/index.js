const Checkbox = ({ label, ...other }) => {
  return (
    <div class='form-check checkbox'>
      <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault' {...other} />
      <label class='form-check-label' for='flexCheckDefault'>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

const Radio = ({ label, ...other }) => {
  return (
    <div class='form-check'>
      <input class='form-check-input' type='radio' id='flexRadioDefault1' {...other} />
      <label class='form-check-label' for='flexRadioDefault1'>
        {label}
      </label>
    </div>
  );
};

export default Radio;

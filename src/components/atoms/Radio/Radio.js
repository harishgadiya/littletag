const Radio = ({ label, id, ...other }) => {
  return (
    <div class='form-check'>
      <input class='form-check-input' type='radio' id={id} {...other} />
      <label class='form-check-label' for={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;

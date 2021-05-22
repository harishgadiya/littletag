const Checkbox = ({ label, id, onChange, ...other }) => {
  return (
    <div class="form-check checkbox">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id={id}
        onChange={onChange}
        {...other}
      />
      <label class="form-check-label" for={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

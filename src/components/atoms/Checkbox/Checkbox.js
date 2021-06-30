import './checkbox.scss';

const Checkbox = ({ label, id, onChange, ...other }) => {
  return (
    <div className="little-tag-checkbox form-check checkbox">
      <input className="form-check-input" type="checkbox" value="" id={id} onChange={onChange} {...other} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

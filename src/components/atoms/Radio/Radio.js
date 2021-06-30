import './radio.scss';

const Radio = ({ label, id, ...other }) => {
  return (
    <div className="little-tag-radio form-check">
      <input className="form-check-input" type="radio" id={id} {...other} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;

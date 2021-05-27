const Radio = ({ label, id, ...other }) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="radio" id={id} {...other} />
      <label className="form-check-label" for={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;

import { useState } from 'react';
import { Button, TextInput, Title } from '../../atoms';
import './rangeFilter.scss';

const RangeFilter = () => {
  const [price, setPrice] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrice({ ...price, [name]: value });
  };

  const handleSubmit = () => {};
  console.log(price);
  return (
    <section className="range-filter">
      <Title text="Price" />
      <div className="min-max">
        <div className="wrapper">
          <TextInput label="min" name="min" placeholder="0" onChange={handleChange} />
          {price['min'] && <Button text="Apply" onClick={handleSubmit} />}
        </div>
        <span>-</span>
        <div className="wrapper">
          <TextInput label="min" name="max" placeholder="10000" onChange={handleChange} />
          {price['max'] && <Button text="Apply" onClick={handleSubmit} />}
        </div>
      </div>
    </section>
  );
};

export default RangeFilter;

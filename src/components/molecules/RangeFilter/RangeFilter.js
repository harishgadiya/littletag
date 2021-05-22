import { TextInput, Title } from '../../atoms';
import './rangeFilter.scss';

const RangeFilter = () => {
  return (
    <section className='range-filter'>
      <Title text='Price' />
      <div className='min-max'>
        <TextInput {...{ label: 'min', value: 0 }} />
        <span>-</span>
        <TextInput {...{ label: 'min', value: 1000 }} />
      </div>
    </section>
  );
};

export default RangeFilter;

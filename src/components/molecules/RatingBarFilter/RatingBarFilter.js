import { Title } from '../../atoms';
import RatingBar from '../RatingBar';
import './ratingBarFilter.scss';

const RatingBarFilter = () => {
  const ratingCount = [{ rate: 5 }, { rate: 4 }, { rate: 3 }, { rate: 2 }, { rate: 1 }];
  return (
    <section className='rating-bar-filter'>
      <Title text='Rating' />
      {ratingCount.map((item) => (
        <RatingBar {...item} />
      ))}
    </section>
  );
};

export default RatingBarFilter;

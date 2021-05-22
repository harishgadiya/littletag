import { Checkbox, Icon } from '../../atoms';
import './ratingBar.scss';

const RatingBar = ({ rate = 0 }) => {
  const ratesCount = [{}, {}, {}, {}, {}];
  return (
    <div className='rating-bar'>
      <Checkbox />
      {ratesCount.map((item, index) =>
        index > rate - 1 ? <Icon name='star' /> : <Icon name='star-filled' />,
      )}
    </div>
  );
};

export default RatingBar;

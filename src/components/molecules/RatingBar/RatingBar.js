import { Checkbox, Icon } from '../../atoms';
import './ratingBar.scss';

const ratesCount = [{}, {}, {}, {}, {}];
const RatingBar = ({ rate = 0, onChange }) => {
  return (
    <div className="rating-bar">
      <Checkbox onChange={onChange} />
      {ratesCount.map((item, index) =>
        index > rate - 1 ? (
          <Icon name="star" />
        ) : (
          <Icon name="star-filled" />
        ),
      )}
    </div>
  );
};

export default RatingBar;

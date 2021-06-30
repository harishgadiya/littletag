import { Checkbox, Icon } from '../../atoms';
import './ratingBar.scss';

const ratesCount = [{}, {}, {}, {}, {}];
const RatingBar = ({ rate = 0, onChange }) => {
  return (
    <div className="rating-bar">
      <Checkbox onChange={onChange} />
      {ratesCount.map((item, index) =>
        index > rate - 1 ? <Icon key={index} name="star" /> : <Icon key={index} name="star-filled" />,
      )}
    </div>
  );
};

export default RatingBar;

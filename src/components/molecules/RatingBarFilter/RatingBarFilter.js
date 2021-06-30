import { connect } from 'react-redux';
import queryString from 'query-string';
import { addQuery } from '../index';
import { useHistory } from 'react-router-dom';

import { setFilter as setFilterAction } from '../../../redux/actions/filterActions';

import { Button, Title } from '../../atoms';
import RatingBar from '../RatingBar';
import './ratingBarFilter.scss';

const ratingCount = [{ rate: 5 }, { rate: 4 }, { rate: 3 }, { rate: 2 }, { rate: 1 }];
let list = {
  rating: [],
};
const RatingBarFilter = ({ setFilter, filter }) => {
  const history = useHistory();
  const { search } = history.location;
  const values = queryString.parse(search);
  const handleChange = ({ rate }) => {
    // const { id, checked } = e.target;
    const rString = rate.toString();
    const index = list[filter].indexOf(rString);
    if (index > -1) {
      list[filter].splice(index, 1);
    } else {
      list[filter].push(rString);
    }
    setFilter({ [filter]: list[filter] });
    addQuery(history, filter, list[filter]);
  };

  const clearFilter = () => {
    setFilter({ [filter]: null });
    addQuery(history, filter, null);
    list[filter] = [];
  };

  return (
    <section className="rating-bar-filter">
      <div className="filter-header">
        <Title {...{ text: 'Rating' }} />
        {values?.[filter]?.length && <Button type="link" text="Clear" onClick={clearFilter} />}
      </div>
      {ratingCount.map((item, index) => (
        <RatingBar
          key={index}
          {...item}
          onChange={() => handleChange(item)}
          checked={values?.[filter]?.split(',').indexOf(item.rate) > -1}
        />
      ))}
    </section>
  );
};

// export default RatingBarFilter;
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (id) => dispatch(setFilterAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingBarFilter);

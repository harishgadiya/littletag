import { useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { Button, Checkbox, Title } from '../../atoms';
import { addQuery } from '../index';
import { useHistory } from 'react-router-dom';
import { setFilter as setFilterAction } from '../../../redux/actions/filterActions';
import './checkboxesFilter.scss';

let list = {
  brand: [],
  color: [],
};

const CheckboxesFilter = ({ title, items, setFilter, filter }) => {
  const history = useHistory();
  const { search } = history.location;
  const values = queryString.parse(search);
  const handleChange = (e) => {
    const { id, checked } = e.target;
    const index = list[filter].indexOf(id);
    if (!checked && index > -1) {
      list[filter].splice(index, 1);
    } else {
      list[filter].push(id);
    }
    setFilter({ [filter]: list[filter] });
    addQuery(history, filter, list[filter]);
  };

  const clearFilter = () => {
    setFilter({ [filter]: null });
    addQuery(history, filter, null);
    list[filter] = [];
  };
  useEffect(() => {
    if (values?.[filter]) {
      setFilter({ [filter]: values?.[filter] });
    }
  }, []);
  return (
    <section className="checkboxes-filter">
      <div className="filter-header">
        <Title {...{ text: title }} />
        {values?.[filter]?.length && (
          <Button type="link" text="Clear" onClick={clearFilter} />
        )}
      </div>
      {items.map((item) => {
        return (
          <Checkbox
            key={item.id}
            {...item}
            onChange={handleChange}
            checked={
              values?.[filter]?.split(',').indexOf(item.id) > -1
            }
          />
        );
      })}
    </section>
  );
};

// export default CheckboxesFilter;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (id) => dispatch(setFilterAction(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckboxesFilter);

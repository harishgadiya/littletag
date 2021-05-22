import { connect } from 'react-redux';
import queryString from 'query-string';

import { Checkbox, Title } from '../../atoms';
import { addQuery } from '../index';
import { useHistory } from 'react-router-dom';
import { setBrand as setBrandAction } from '../../../redux/actions/filterActions';
import './checkboxesFilter.scss';

const list = [];

const CheckboxesFilter = ({ title, items, setBrand }) => {
  const history = useHistory();
  const { search } = history.location;
  const values = queryString.parse(search);
  // const selectedBrand = values?.brand?.split(',') || [];
  // if (
  //   selectedBrand.length &&
  //   list.some((s) => selectedBrand.indexOf(s) === -1)
  // ) {
  //   // list.push(selectedBrand);
  // }
  const handleChange = (e) => {
    const { id, checked } = e.target;
    const index = list.indexOf(id);
    if (!checked && index > -1) {
      list.splice(index, 1);
    } else {
      // list.push(selectedBrand);
      list.push(id);
    }
    // if (list.length > 1) {
    //   list.join();
    // }
    // all.join(',');
    setBrand(list);
    // addQuery(`gender=${id}`);
    // if (search) {
    //   const createSearch = search.includes('brand')
    //     ? `${search}&brand=${[id].join}`
    //     : `${search}&brand=${id}`;
    //   history.push({
    //     pathname: '/listing',
    //     search: createSearch,
    //   });
    // }
    addQuery(history, 'brand', list);
    // if (list.length) {
    // } else if (values) {
    //   delete values?.brand;
    //   history.replace({
    //     search: JSON.stringify(values),
    //   });
    // }

    // history.push({
    //   pathname: '/listing',
    //   search: `brand=${list}`,
    // });
  };

  return (
    <section className="checkboxes-filter">
      <Title {...{ text: title }} />
      {items.map((item) => {
        return (
          <Checkbox
            key={item.id}
            {...item}
            onChange={handleChange}
            checked={values?.brand?.split(',').indexOf(item.id) > -1}
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
    setBrand: (id) => dispatch(setBrandAction(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckboxesFilter);

// import { useState } from 'react';
import { createRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import { addQuery } from '..';
import setGenderAction from '../../../redux/actions/filterActions';
import { Radio, Title } from '../../atoms';
import './genderFilter.scss';

const genderList = [
  {
    label: 'Male',
    id: 'male',
  },
  {
    label: 'Female',
    id: 'female',
  },
];

const GenderFilter = (props) => {
  const history = useHistory();
  const { search } = history.location;
  const values = queryString.parse(search);
  const inputRef = createRef();
  const handleChange = (e) => {
    const { id, checked } = e.target;
    props.setGender(id);
    if (checked) {
      e.target.checked = true;
    }
    addQuery(history, 'gender', id);
    // history.push({
    //   pathname: '/listing',
    //   search: `gender=${id}`,
    // });
  };

  return (
    <section className="gender-filter">
      <Title {...{ text: 'Gender' }} />
      {genderList.map((gender) => (
        <Radio
          {...{ label: gender.label, name: 'gender', id: gender.id }}
          onChange={handleChange}
          ref={inputRef}
          checked={values?.gender === gender.id}
        />
      ))}
      {/* <Radio {...{ label: 'Female', name: 'gender', id: "female" }} onChange={handleChange} /> */}
    </section>
  );
};

// export default GenderFilter;

const mapStateToProps = (state) => {
  return {
    selectedGender: state.gender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setGender: (id) => dispatch(setGenderAction(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenderFilter);

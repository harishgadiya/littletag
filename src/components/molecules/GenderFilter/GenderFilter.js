// import { useState } from 'react';
import { createRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import { addQuery } from '..';
import setGenderAction from '../../../redux/actions/filterActions';
import { Button, Radio, Title } from '../../atoms';
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
  //const inputRef = createRef();
  const handleChange = (e) => {
    const { id, checked } = e.target;
    props.setGender(id);
    if (checked) {
      e.target.checked = true;
    }
    addQuery(history, 'gender', id);
  };

  const clearFilter = () => {
    props.setGender(null);
    addQuery(history, 'gender', null);
    // addQuery(history, 'gender', id);
  };

  useEffect(() => {
    if (values?.gender) {
      props.setGender(values?.gender);
    }
  }, []);
  console.log(props.selectedGender, '>>>>>>>>>.');
  return (
    <section className="gender-filter">
      <div className="filter-header">
        <Title {...{ text: 'Gender' }} />
        {props.selectedGender && <Button type="link" text="Clear" onClick={clearFilter} />}
      </div>
      {genderList.map((gender, index) => (
        <Radio
          key={index}
          {...{ label: gender.label, name: 'gender', id: gender.id }}
          onChange={handleChange}
          //ref={inputRef}
          checked={props.selectedGender === gender.id}
        />
      ))}
      {/* <Radio {...{ label: 'Female', name: 'gender', id: "female" }} onChange={handleChange} /> */}
    </section>
  );
};

// export default GenderFilter;

const mapStateToProps = (state) => {
  return {
    selectedGender: state.filterReducer.gender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setGender: (id) => dispatch(setGenderAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenderFilter);

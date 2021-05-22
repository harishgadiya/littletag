const initialState = {
  gender: null,
  brand: null,
};

export const filterType = {
  SET_GENDER: 'SET_GENDER',
  SET_BRAND: 'SET_BRAND',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GENDER':
      return {
        ...state,
        gender: action.payload,
      };
    case 'SET_BRAND':
      return {
        ...state,
        brand: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;

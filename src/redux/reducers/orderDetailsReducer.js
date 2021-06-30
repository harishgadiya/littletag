const initialState = {
    orders: {},
    loading: false,
  };
  
  export const orderType = {
    FETCH_ORDER_LOADING: 'FETCH_ORDER_LOADING',
    FETCH_ORDER_SUCCESS: 'FETCH_ORDER_SUCCESS',
  };
  
  const orderDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ORDER_LOADING':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_ORDER_SUCCESS':
        return {
          ...state,
          orders: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default orderDetailReducer;
  
import ordersActionTypes from './orders.types';

const INITAL_STATE = {
  orders: null,
  isPending: false,
  errorMessage: '',
  currentOrder : null
}
const ordersReducer = ( state = INITAL_STATE, action ) => {
  switch (action.type) {
    case ordersActionTypes.CLEAR_ORDERS:
      return {
        ...state,
        orders: []
      }
    case ordersActionTypes.REQUEST_ORDERS_START:
      return { 
        ...state,
        isPending: true
      };
    case ordersActionTypes.REQUEST_ORDERS_SUCCESS:
      return { 
        ...state,
        orders: action.payload,
        isPending: false
      };
    case ordersActionTypes.REQUEST_ORDERS_FAILED:
      return { 
        ...state, 
        errorMessage: action.payload, 
        isPending: false
      };
    case ordersActionTypes.SET_CURRENT_ORDER:
      return { 
        ...state, 
        currentOrder: action.payload
      };
    case ordersActionTypes.UNSET_CURRENT_ORDER:
      return { 
        ...state, 
        currentOrder: null
      };
    default:
      return state;
  }
}

export default ordersReducer;

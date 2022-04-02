import { REQUEST_API, GET_CURRENCIES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      currencies: action.state,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.state,
    };
  default:
    return state;
  }
}

export default wallet;

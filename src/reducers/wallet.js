import { GET_CURRENCIES, NEW_EXPENSES, DELETE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.state,
    };
  case NEW_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  case DELETE:
    return {
      ...state,
      expenses: action.state,
    };
  default:
    return state;
  }
}

export default wallet;

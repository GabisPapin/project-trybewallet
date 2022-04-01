// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTION':
    return {
      currencies: [action.state],
      expenses: [action.state],
    };
  default:
    return state;
  }
}

export default wallet;

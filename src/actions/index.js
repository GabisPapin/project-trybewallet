export const NEW_ACTION = 'NEW_ACTION';
export const NEW_EXPENSES = 'NEW_EXPENSES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';
export const UPDATE_INFOS = 'UPDATE_INFOS';

// Coloque aqui suas actions
export const action = (state) => ({ type: NEW_ACTION, state });

export const actionExpense = (state) => ({ type: NEW_EXPENSES, state });

export const getCurrencies = (state) => ({ type: GET_CURRENCIES, state });

export const actionDelete = (state) => ({ type: DELETE, state });

export const actionEdit = (id) => ({ type: EDIT, id });

export const updateInfos = (state) => ({
  type: UPDATE_INFOS,
  state,
});

export function fecthAPI() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const json = await response.json();
      const currencie = Object.keys(json).filter((code) => code !== 'USDT');
      dispatch(getCurrencies(currencie));
    } catch (error) {
      console.log(error);
    }
  };
}

export const NEW_ACTION = 'NEW_ACTION';
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCIES = 'GET_CURRENCIES';

// Coloque aqui suas actions
export const action = (state) => ({ type: NEW_ACTION, state });

export const getCurrencies = (state) => ({ type: GET_CURRENCIES, state });

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

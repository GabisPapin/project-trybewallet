// Esse reducer será responsável por tratar as informações da pessoa usuária
import { NEW_ACTION } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_ACTION:
    return { ...state, email: action.state };
  default:
    return state;
  }
}

export default user;

/* reducers specify how the application state changes in response to action
*/
import {
  INIT_AUTH,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from '../constants.js';

//initial state is user not authenticated & id is set to null
//The starting state sets authentication based on a token being in local storage
//in real app, would want to use a util to check if token is expired

export const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true: false
};

export default function LoginReducer(state = initialState, action) {
  console.log('in Login Reducer');
  console.log(initialState);
  switch (action.type) {
    case INIT_AUTH:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true 
      })

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      })

    default:
      return state;
  };
};
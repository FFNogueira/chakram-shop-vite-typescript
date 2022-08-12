// Combinador de reducers:
import { combineReducers } from 'redux';
// Importando os reducers a serem combinados no rootReducer
import { userLoginStatusReducer } from './user-login-status/reducer';
import { shoppingCartReducer } from './shopping-cart/reducer';
// Root-reducer:
const rootReducer = combineReducers({
  // Objetos no formato "chave : reducer":
  userLoginStatus: userLoginStatusReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;

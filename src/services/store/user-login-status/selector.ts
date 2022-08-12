// Criador de selectors
import { createSelector } from 'reselect';

// Interface de tipo:
interface IRootReducerState {
  userLoginStatus: {
    currentUser: object | null;
  };
}

// BLUEPRINT DO SELETOR DO REDUCER:
// const [selector do reducer] = (state) => state.[chave do reducer no root-reducer]
const selectUserLoginStatusReducer = (state: IRootReducerState) =>
  state.userLoginStatus;

export const selectUserLoginStatus = createSelector(
  // Seletor do reducer a ser observado:
  [selectUserLoginStatusReducer],
  // BLUEPRINT DO REDUCER A SER RETORNADO:
  // ([chave do reducer no root-reducer]) => [chave do reducer no root-reducer]
  (userLoginStatus) => userLoginStatus,
);

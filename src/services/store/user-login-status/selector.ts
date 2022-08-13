// Criador de selectors
import { createSelector } from 'reselect';
// Interface de tipo:
import { ILoginStatus } from '../../interfaces';

interface IRootReducerState {
  userLoginStatus: ILoginStatus;
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

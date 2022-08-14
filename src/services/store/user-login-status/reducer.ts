// Tipos de ação suportadas por este reducer:
import { ACTION_TYPES } from './action-types';
// interfaces de tipo:
import { ILoginStatus, IAction, TUser } from '../../interfaces';

// Valor inicial das variáveis de estado global:
const INITIAL_STATE: ILoginStatus = {
  currentUser: null,
};

// Reducer deste contexto:
export const userLoginStatusReducer = (
  state = INITIAL_STATE,
  action: IAction<TUser>,
) => {
  const { type, payload } = action;
  // ação a ser tomada (dependendo do tipo de ação):
  switch (type) {
    case ACTION_TYPES.UPDATE_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

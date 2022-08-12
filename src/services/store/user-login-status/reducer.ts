// Tipos de ação suportadas por este reducer:
import { ACTION_TYPES } from './action-types';
// interfaces de tipo:
export interface Action {
  type: string;
  payload: object;
}

// Valor inicial das variáveis de estado global:
const INITIAL_STATE = {
  currentUser: null,
};

// Reducer deste contexto:
export const userLoginStatusReducer = (
  state: null | object = INITIAL_STATE,
  action: Action,
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

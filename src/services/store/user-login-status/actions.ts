// Tipos de ação suportadas:
import { ACTION_TYPES } from './action-types';

// Ação usada para setar o usuário logado atualmente:
export const setCurrentUser = (user: object | null) => {
  return { type: ACTION_TYPES.UPDATE_CURRENT_USER, payload: user };
};

// Tipos de ação suportadas:
import { ACTION_TYPES } from './action-types';
// interfaces de tipo:
import { TUser } from '../../interfaces';

// Ação usada para setar o usuário logado atualmente:
export const setCurrentUser = (user: TUser) => {
  return { type: ACTION_TYPES.UPDATE_CURRENT_USER, payload: user };
};

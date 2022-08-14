// Tipos de ação suportadas por este reducer:
import { ACTION_TYPES } from './action-types';
// interfaces de tipo:
import { ICartItem, IAction } from '../../interfaces';

interface ICart {
  cartItens: ICartItem[] | null;
}

// Valor inicial das variáveis de estado global:
const INITIAL_STATE: ICart = {
  cartItens: JSON.parse(window.localStorage.getItem('cartItens') || '[]'),
};

// Reducer deste contexto:
export const shoppingCartReducer = (
  state = INITIAL_STATE,
  action: IAction<ICartItem[]>,
) => {
  const { type, payload } = action;
  // ação a ser tomada (dependendo do tipo de ação):
  switch (type) {
    case ACTION_TYPES.UPDATE_CART_ITENS:
      return { ...state, cartItens: payload };
    default:
      return state;
  }
};

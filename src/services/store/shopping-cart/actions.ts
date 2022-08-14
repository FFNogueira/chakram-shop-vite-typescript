// Tipos de ação suportadas:
import { ACTION_TYPES } from './action-types';
// interfaces de tipo:
import { ICartItem } from '../../interfaces';

// Ação usada para atualizar os itens no carrinho:
export const setCartItens = (cartItens: ICartItem[]) => {
  return { type: ACTION_TYPES.UPDATE_CART_ITENS, payload: cartItens };
};

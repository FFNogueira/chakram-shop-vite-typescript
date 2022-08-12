// Tipos de ação suportadas:
import { ACTION_TYPES } from './action-types';

// Ação usada para atualizar os itens no carrinho:
export const setCartItens = (cartItens: object[]) => {
  return { type: ACTION_TYPES.UPDATE_CART_ITENS, payload: cartItens };
};

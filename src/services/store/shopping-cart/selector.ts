// Criador de selectors
import { createSelector } from 'reselect';
// interfaces de tipo:
import { ICartItem } from '../../interfaces';

interface IRootReducerState {
  shoppingCart: {
    cartItens: ICartItem[];
  };
}

// BLUEPRINT DO SELETOR DO REDUCER:
// const [selector do reducer] = (state) => state.[chave do reducer no root-reducer]
const selectShoppingCartReducer = (state: IRootReducerState) =>
  state.shoppingCart;

export const selectShoppingCart = createSelector(
  // Seletor do reducer a ser observado:
  [selectShoppingCartReducer],
  // BLUEPRINT DO REDUCER A SER RETORNADO:
  // ([chave do reducer no root-reducer]) => [chave do reducer no root-reducer]
  (shoppingCart) => shoppingCart,
);

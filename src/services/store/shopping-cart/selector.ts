// Criador de selectors
import { createSelector } from 'reselect';

// Interface de tipo:
interface CartItem {
  itemName: string;
  imgURL: string;
  units: number;
  unitPrice: number;
}

interface IRootReducerState {
  shoppingCart: {
    cartItens: CartItem[];
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

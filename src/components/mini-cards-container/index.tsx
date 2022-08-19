import React from 'react';
// subcomponente:
import MiniCard from '../mini-card';
// estilo deste componente:
import { MiniCardsContainer } from './style';
// interfaces de tipo:
import { ICartItem } from '../../services/interfaces';

interface IProps {
  cartItens: ICartItem[];
}

function CartMiniCards(props: IProps) {
  const { cartItens } = props;
  return (
    <MiniCardsContainer>
      {cartItens.length ? (
        cartItens.map((item) => (
          <MiniCard key={item.itemName} cartItem={item} />
        ))
      ) : (
        <p className="empty-cart">carrinho vazio</p>
      )}
    </MiniCardsContainer>
  );
}

export default CartMiniCards;

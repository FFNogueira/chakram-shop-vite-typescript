import React from 'react';
// estilo deste componente:
import { MiniCardsContainer } from './style';
// interfaces de tipo:
interface Item {
  itemName: string;
  imgURL?: string;
  units?: number;
  unitPrice?: number;
}

interface IProps {
  cartItens: Item[];
}

function CartMiniCards(props: IProps) {
  const { cartItens } = props;
  return (
    <MiniCardsContainer>
      {cartItens.length ? (
        cartItens.map((item) => (
          <div key={item.itemName} className="mini-card">
            <img src={item.imgURL} alt={item.itemName} />
            <div className="mini-card-info">
              <p>{item.itemName}</p>
              <p>{`${item.units} x R$${item.unitPrice}`}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-cart">carrinho vazio</p>
      )}
    </MiniCardsContainer>
  );
}

export default CartMiniCards;

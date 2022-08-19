import React from 'react';
// estilo deste componente:
import { MiniCardBlock } from './style';
// interfaces de tipo:
import { ICartItem } from '../../services/interfaces';

interface IProps {
  cartItem: ICartItem;
}

function MiniCard({ cartItem }: IProps) {
  const { itemName, imgURL, units, unitPrice } = cartItem;
  return (
    <MiniCardBlock>
      <div className="mini-card">
        <img src={imgURL} alt={itemName} />
        <div className="mini-card-info">
          <p>{itemName}</p>
          <p>{`${units} x R$${unitPrice}`}</p>
        </div>
      </div>
    </MiniCardBlock>
  );
}

export default MiniCard;

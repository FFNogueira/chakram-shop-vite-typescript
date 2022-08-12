import React from 'react';
// Hook disparador de ações:
import { useDispatch, useSelector } from 'react-redux';
// estilo deste componente:
import { List } from './style';
// função para alterações no carrinho de compras:
import manageShoppingCartItens from '../../modules/manage-cart-itens';
// mensageiro toastify:
import sendToast from '../../modules/send-toast';
// Ações deste componente:
import { setCartItens } from '../../services/store/shopping-cart/actions';
// Reselector para a variável de estado global:
import { selectShoppingCart } from '../../services/store/shopping-cart/selector';
// interface de tipos:
import { ItemList, Item } from '../../services/interfaces';
// interface de tipos:
interface IProps {
  itemList: ItemList;
}

function ProductList({ itemList }: IProps) {
  const dispatch = useDispatch();
  const { cartItens } = useSelector(selectShoppingCart);
  const { title, items, id } = itemList;

  const handleAddItemToCart = (item: Item) => {
    const { name, imageUrl, price } = item;
    const newCartItens = manageShoppingCartItens(cartItens, {
      itemName: name,
      imgURL: imageUrl,
      unitPrice: price,
    });
    dispatch(setCartItens(newCartItens));
    sendToast('success', `"${name}" adicionado ao carrinho`, 1000);
  };

  return (
    <List>
      <h2 id={id}>{title}</h2>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.name}>
            <div className="item">
              <img className="item-img" src={item.imageUrl} alt={item.name} />
              <button
                type="button"
                className="add-to-cart-button"
                onClick={() => handleAddItemToCart(item)}
              >
                Adicionar ao carrinho
              </button>
            </div>
            <div className="item-desc">
              <hr />
              <p className="item-name">{item.name}</p>
              <p className="item-price">{`R$ ${item.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </List>
  );
}

export default ProductList;

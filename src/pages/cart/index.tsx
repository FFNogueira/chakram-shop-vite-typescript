import React from 'react';
// Hooks disparador de ações e leitor de variáveis globais:
import { useDispatch, useSelector } from 'react-redux';
// react-icons
import { FcPlus, FcMinus, FcCancel } from 'react-icons/fc';
// subcomponentes:
import PaymentCheckout from '../../components/payment-checkout';
// Ações deste componente:
import { setCartItens } from '../../services/store/shopping-cart/actions';
// estilos desta Página
import { Page } from './style';
// módulo de gerenciamento de itens do carrinho:
import manageShoppingCartItens from '../../modules/manage-cart-itens';
// Reselector para a variável de estado global:
import { selectShoppingCart } from '../../services/store/shopping-cart/selector';

function Cart() {
  // lendo os itens atualmente no carrinho:
  const { cartItens } = useSelector(selectShoppingCart);
  // disparador de ações:
  const dispatch = useDispatch();
  // Total dos preços dos itens no carrinho:
  const cartTotalPrice = cartItens.reduce(
    (acc, item) => acc + item.units * item.unitPrice,
    0,
  );
  // Decrementa itens no carrinho:
  const handleItemDecrease = (itemName: string, quantity = 1) => {
    const newCartItens = manageShoppingCartItens(
      cartItens,
      { itemName },
      quantity,
    );
    dispatch(setCartItens(newCartItens));
  };
  // incrementa itens no carrinho:
  const handleItemIncrease = (itemName: string) => {
    const newCartItens = manageShoppingCartItens(cartItens, { itemName });
    dispatch(setCartItens(newCartItens));
  };

  return (
    <Page>
      {cartItens.length ? (
        <>
          {cartItens.map(({ itemName, imgURL, units, unitPrice }) => {
            return (
              <div key={itemName} className="item-container">
                <img src={imgURL} alt={itemName} />
                <div className="name-and-quantity">
                  <span className="item-name">{itemName}</span>
                  <div className="quantity">
                    <button
                      type="button"
                      onClick={() => handleItemDecrease(itemName)}
                    >
                      <FcMinus />
                    </button>
                    <span>{units}</span>
                    <button
                      type="button"
                      onClick={() => handleItemIncrease(itemName)}
                    >
                      <FcPlus />
                    </button>
                  </div>
                </div>
                <span className="price">{`R$${units * unitPrice}`}</span>
                <button
                  className="remove-from-cart"
                  type="button"
                  onClick={() => handleItemDecrease(itemName, units)}
                >
                  <FcCancel />
                </button>
              </div>
            );
          })}
          <div className="total-price">
            <span>TOTAL</span>
            <span>{`R$${cartTotalPrice}`}</span>
          </div>
          <PaymentCheckout amount={cartTotalPrice} />
        </>
      ) : (
        <div className="empty-cart">
          <p>Seu carrinho está vazio :(</p>
        </div>
      )}
    </Page>
  );
}

export default Cart;

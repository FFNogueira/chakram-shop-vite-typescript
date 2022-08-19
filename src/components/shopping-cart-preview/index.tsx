import React from 'react';
// Leitor de variáveis de estado global::
import { useSelector } from 'react-redux';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// estilos deste componente:
import { ShoppingCartContainer } from './style';
// componentes:
import CartMiniCards from '../mini-cards-container';
// Reselector para a variável de estado global:
import { selectShoppingCart } from '../../services/store/shopping-cart/selector';

function ShoppingCartPreview() {
  const [display, setDisplay] = React.useState('none');
  const { cartItens } = useSelector(selectShoppingCart);

  const handleCloseCartPreview = (e: Event) => {
    const isInsideCartPreview = (e.target as HTMLElement).closest(
      '.cart-preview-window',
    );
    const isCartButton = (e.target as HTMLElement).closest('.cart-button');
    if (!isInsideCartPreview && !isCartButton) setDisplay('none');
  };

  React.useEffect(() => {
    document.addEventListener('click', handleCloseCartPreview);
    return () => {
      document.removeEventListener('click', handleCloseCartPreview);
    };
  }, []);

  return (
    <ShoppingCartContainer>
      <button
        type="button"
        className="cart-button"
        onClick={() => setDisplay(display === 'none' ? 'flex' : 'none')}
      >
        <BsCart2 className="shopping-cart-icon" />
        <span className="number-of-itens">
          {cartItens.reduce((acc, item) => acc + item.units, 0)}
        </span>
      </button>
      <div className="cart-preview-window" style={{ display }}>
        <CartMiniCards cartItens={cartItens} />
        <Link to="/cart" onClick={() => setDisplay('none')}>
          Ir para o carrinho
        </Link>
      </div>
    </ShoppingCartContainer>
  );
}

export default ShoppingCartPreview;

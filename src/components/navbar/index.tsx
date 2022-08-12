import React from 'react';
// Hook para leitura das variáveis de estado global:
import { useSelector } from 'react-redux';
// importa Links:
import { Link, useNavigate } from 'react-router-dom';
// importa o svg da logo:
import { ReactComponent as Logo } from '../../favicon.svg';
// importa styled component específico para esta página:
import { NavContainer } from './style';
// Serviços do firebase:
import { signOutUser } from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/send-toast';
// componente botão carrinho de compras:
import ShoppingCartPreview from '../shopping-cart-preview';
// Reselector para a variável de estado global:
import { selectUserLoginStatus } from '../../services/store/user-login-status/selector';

function Navbar() {
  // hook redirecionador:
  const navigate = useNavigate();
  // Tenta obter o usuário logado atualmente:
  const { currentUser } = useSelector(selectUserLoginStatus);

  const handleSignOutUser = async () => {
    const res = await signOutUser();
    // se logout falhou:
    if (res?.errors) sendToast('errors', res.errors[0]);
    // se logout deu certo:
    else {
      navigate('/');
    }
  };

  return (
    <NavContainer className="navbar">
      <Link to="/" className="logo">
        <Logo className="logo-icon" />
      </Link>
      <Link to="/products">PRODUTOS</Link>
      {currentUser ? (
        <button type="button" onClick={handleSignOutUser}>
          LOGOUT
        </button>
      ) : (
        <Link to="/signIn">LOGIN</Link>
      )}
      <ShoppingCartPreview />
    </NavContainer>
  );
}

export default Navbar;

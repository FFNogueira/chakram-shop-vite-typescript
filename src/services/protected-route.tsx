import React, { ReactElement } from 'react';
// Hook para leitura das variáveis de estado global:
import { useSelector } from 'react-redux';
// Redirecionador de rotas
import { Navigate, useLocation } from 'react-router-dom';
// Reselector para a variável de estado global:
import { selectUserLoginStatus } from './store/user-login-status/selector';
// Interface de tipos:
import { ILocation } from './interfaces';

// Interface de tipos:
interface IProps {
  prevPath: string;
  myElement: ReactElement;
}

function ProtectedRoute(props: IProps) {
  const { prevPath, myElement } = props;
  // verifica se há usuário logado:
  const { currentUser } = useSelector(selectUserLoginStatus);
  // tenta obter dados provenientes do state de location:
  const location = useLocation();
  // dados auxiliares que porventura tenham sido enviados:
  const data = (location as ILocation)?.state?.data || {};
  // ===========================
  // Se usuário estiver logado:
  // ===========================
  if (currentUser) {
    switch (prevPath) {
      case '/signIn':
        // se tentar acessar página de login, redirecione para homepage:
        return <Navigate to="/" />;

      default:
        // senão prossiga para a página desejada:
        return myElement;
    }
  }
  // ==============================
  // Se usuário NÃO estiver logado:
  // ==============================
  else {
    switch (prevPath) {
      case '/signIn':
        // ...e tentar acessar página de login, permita:
        return myElement;

      default:
        // se tentar acessar página protegida, redirecione para a página de login:
        return <Navigate to="/signIn" state={{ prevPath, data }} />;
    }
  }
}

export default ProtectedRoute;

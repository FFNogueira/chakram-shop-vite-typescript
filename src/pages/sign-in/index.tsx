import React from 'react';
// hooks:
import { useLocation } from 'react-router-dom';
// Componentes:
import LoginForm from '../../components/login-form';
import RegisterForm from '../../components/register-form';
// estilo específico desta página:
import { SignPage } from './style';
// interface de tipos:
import { ILocation } from '../../services/interfaces';

function SignIn() {
  // obtém o caminho/link anterior (em caso de redirecionamento para cá):
  const location = useLocation();
  // verifica se "prevPath" está definido no state:
  const prevPath = (location as ILocation)?.state?.prevPath || '/';
  // verifica se "data" está definido no state:
  const data = (location as ILocation)?.state?.data || {};
  // estados:
  const [pointerEvents, setPointerEvents] = React.useState('all');

  return (
    <SignPage>
      <LoginForm
        pointerEvents={pointerEvents}
        setPointerEvents={setPointerEvents}
        prevPath={prevPath}
        data={data}
      />
      <RegisterForm
        pointerEvents={pointerEvents}
        setPointerEvents={setPointerEvents}
        prevPath={prevPath}
        data={data}
      />
    </SignPage>
  );
}

export default SignIn;

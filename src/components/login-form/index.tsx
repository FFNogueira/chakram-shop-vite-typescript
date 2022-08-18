import React from 'react';
// hooks:
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
// styled-component da página:
import { FormContainer } from './style';
// serviços do Firebase:
import {
  signInWithGooglePopup,
  createUserDocument,
  signInUsingEmailandPassword,
} from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/send-toast';
// interfaces de tipo:
import { SignProps } from '../../services/interfaces';

function LoginForm(props: SignProps) {
  // hook redirecionador:
  const navigate = useNavigate();
  // obtendo props:
  const { pointerEvents, setPointerEvents, prevPath, data } = props;

  // variáveis de estado local:
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleGoogleLogin = React.useCallback(async () => {
    try {
      setPointerEvents('none');
      // tenta fazer login usando conta google:
      const loginData = await signInWithGooglePopup();
      // se der certo, tente criar um documento...
      // ...na coleção 'users' (apenas se este usuário...
      // ...já não esiver cadastrado):
      const doc = await createUserDocument(loginData.user);
      // se ocorreu erros na criação do novo usuário:
      if ('errors' in doc) {
        sendToast('error', doc.errors[0]);
      } else {
        sendToast('success', 'Logado com sucesso!', 4000);
        // redirecionar para outra página:
        navigate(prevPath as string, { state: { data } });
      }
    } catch (err) {
      console.log('*ERRO:*', err);
    } finally {
      setPointerEvents('all');
    }
  }, []);

  const handleEmailAndPasswordLogin = React.useCallback(
    async (event: React.FormEvent) => {
      try {
        event.preventDefault();
        setPointerEvents('none');
        sendToast('loading', 'Logando...');
        // tenta fazer login usando email e senha:
        const loginData = await signInUsingEmailandPassword(email, password);
        // se houve algum erro:
        if ('errors' in loginData) {
          sendToast('error', loginData.errors[0]);
        }
        // Se deu tudo certo:
        else {
          sendToast('success', 'Logado com sucesso!', 3000);
          // redirecionar para outra página:
          navigate(prevPath as string, { state: { data } });
        }
      } catch (err) {
        console.log('*ERRO:*', err);
      } finally {
        setPointerEvents('all');
      }
    },
    [password, email],
  );

  // Executa sempre que o componente é renderizado:
  return (
    <FormContainer action="" onSubmit={handleEmailAndPasswordLogin}>
      <p>Faça login</p>
      <label htmlFor="login-email">
        <input
          required
          type="email"
          id="login-email"
          placeholder="e-mail"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </label>
      <label htmlFor="login-password">
        <input
          required
          type="password"
          id="login-password"
          placeholder="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </label>
      <div className="button-login-container">
        <button
          type="button"
          className="signWithGoogle"
          onClick={handleGoogleLogin}
          style={{ pointerEvents: pointerEvents as any }}
        >
          <span>logar com</span> <FaGoogle />
        </button>
        <button
          type="submit"
          className="signWithEmailAndPassword"
          style={{ pointerEvents: pointerEvents as any }}
        >
          logar com sua conta
        </button>
      </div>
    </FormContainer>
  );
}

export default LoginForm;

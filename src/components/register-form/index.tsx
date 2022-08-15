import React from 'react';
// hooks:
import { useNavigate } from 'react-router-dom';
// estyled-component da página:
import { FormContainer } from './style';
// serviços do Firebase
import {
  createUserDocument,
  registerUsingEmailAndPassword,
} from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/send-toast';
// interfaces de tipo:
import { SignProps, IUser } from '../../services/interfaces';

function RegisterForm(props: SignProps) {
  // hook redirecionador:
  const navigate = useNavigate();
  // obtendo props:
  const { pointerEvents, setPointerEvents, prevPath, data } = props;
  // variáveis de estado local:
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const handleEmailAndPasswordRegister = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      setPointerEvents('none');
      sendToast('loading', 'Registrando...');
      // tenta fazer login usando email e senha:
      const registerData = await registerUsingEmailAndPassword(
        email,
        password,
        username,
      );
      // se houve algum erro:
      if ('errors' in registerData) {
        if (registerData.errors.length > 1) {
          // enviar toast com 2 ou mais erros!!
          sendToast(
            'error',
            <>
              {registerData.errors.map((e) => (
                <p key={e}>
                  <span>⇛</span> {e}
                </p>
              ))}
            </>,
          );
        } else {
          // enviar toast com apenas 1 erro!!
          sendToast('error', registerData.errors[0]);
        }
      }
      // Se deu tudo certo (sem erros):
      else {
        // tente criar um documento na coleção 'users'...
        // ...(apenas se este usuário...
        // ...já não esiver cadastrado):
        const doc = await createUserDocument(
          (registerData as IUser).user,
          username,
        );
        // se houve erros na etapa anterior:

        if ('errors' in doc) {
          sendToast('error', doc.errors[0]);
        }
        // Se deu tudo certo:
        else {
          sendToast('success', 'Registro efetuado!', 3000);
          // redireciona para outra página:
          navigate(prevPath as string, { state: { data } });
        }
      }
    } catch (err) {
      console.log('*ERRO:*', err);
    } finally {
      setPointerEvents('all');
    }
  };

  return (
    <FormContainer action="" onSubmit={handleEmailAndPasswordRegister}>
      <p>Registre-se</p>
      <label htmlFor="register-username">
        <input
          required
          type="text"
          id="register-username"
          placeholder="Nome de usuário"
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
      </label>
      <label htmlFor="register-email">
        <input
          required
          type="email"
          id="register-email"
          placeholder="e-mail"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </label>
      <label htmlFor="register-password">
        <input
          required
          type="password"
          id="register-password"
          placeholder="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </label>
      <button
        type="submit"
        className="register"
        style={{ pointerEvents: pointerEvents as any }}
      >
        Registrar
      </button>
    </FormContainer>
  );
}

export default RegisterForm;

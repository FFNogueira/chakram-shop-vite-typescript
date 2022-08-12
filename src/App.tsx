import React from 'react';
// importa o roteador do react-router-dom:
import { BrowserRouter } from 'react-router-dom';
// Importa o React-Toastify (mensagens para o usuário)
import { ToastContainer, Slide } from 'react-toastify';
// Dispachador de ações do 'react redux'
import { useDispatch } from 'react-redux';
// Importa os estilos globais:
import GlobalStyle from './styles/global-style';
// importa minhas rotas de páginas:
import MyRoutes from './routes';
// importa a Navbar:
import Navbar from './components/navbar';
// importa a tela de loading:
import LoadingScreen from './components/loading-screen';
// observador de mudança de estado de login:
import { onAuthStateChangedListener } from './services/firebase';
// ações utilizadas por este componente:
import { setCurrentUser } from './services/store/user-login-status/actions';

function App() {
  // Hook Disparador de ações:
  const dispatch = useDispatch();
  // Executa o observador de mudança de estado de login...
  // ...sempre que o app montar:
  React.useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: object | null) => {
      // seta o usuário atual em uma variável de estado golbal:
      dispatch(setCurrentUser(user));
    });

    // executa a função "unsubscribe" quando o app for desmontado:
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <LoadingScreen />
      <Navbar />
      <MyRoutes />
      <GlobalStyle />
      <ToastContainer
        position="bottom-center"
        className="toast-container"
        autoClose={false}
        draggable={false}
        transition={Slide}
      />
    </BrowserRouter>
  );
}

export default App;

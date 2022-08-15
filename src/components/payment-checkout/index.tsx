import React from 'react';
// Hook para leitura das variáveis de estado global:
import { useSelector } from 'react-redux';
// subcomponentes:
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// Redirecionador de páginas:
import { useNavigate } from 'react-router-dom';
// Reselector para a variável de estado global:
import { selectUserLoginStatus } from '../../services/store/user-login-status/selector';
// toastify:
import sendToast from '../../modules/send-toast';
// estilo deste componente:
import { PaymentContainer } from './style';
// Serviços do firebase:
import { getUserDocument } from '../../services/firebase';
// interfaces de tipo:
import { IUserData } from '../../services/interfaces';

interface IProps {
  amount: number;
}

function PaymentCheckout(props: IProps) {
  const { amount } = props;
  const [pointerEvents, setPointerEvents] = React.useState('all');
  // Obtendo dados do usuário logado atualmente:
  const { currentUser } = useSelector(selectUserLoginStatus);
  // Hook redirecionador de página:
  const navigate = useNavigate();
  // Hooks do Stripe:
  const stripe = useStripe();
  const elements = useElements();
  // Tenta enviar os dados do cartão de crédito para o Stripe:
  const handlePaymentForm = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      setPointerEvents('none');
      sendToast('loading', 'Processando...');
      // Se usuário NÃO está logado:
      if (!currentUser) {
        sendToast(
          'info',
          'Você deve estar logado para realizar esta ação!',
          5000,
        );
        return navigate('/signIn', { state: { prevPath: '/cart' } });
      }
      // Continue apenas se o componente de pagamento estiver pronto
      if (!stripe || !elements) return null;
      // Tenta obter os dados de registro do usuário:
      const userData = await getUserDocument(currentUser);
      // Continue apenas se não houve erros na obtenção dos dados:
      if (userData?.errors) return sendToast('error', userData.errors[0]);
      // Faz a requisição de Pagamento:
      const response = await fetch('/.netlify/functions/tryToPay', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      });
      // converte a resposta em objeto JSON:
      const data = await response.json();
      // obtém o cliente secret:
      const { client_secret: clientSecret } = data.tryToPay;
      // Verifica se o pagamento é válido com o cartão atual:
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement) || { token: '' },
          billing_details: {
            name: (userData as IUserData).displayName,
            email: (userData as IUserData).email,
          },
        },
      });
      // Verifica se houve erro no pagamento:
      if (paymentResult.error) {
        return sendToast('error', paymentResult.error.message);
      }
      return sendToast('success', 'Pagamento realizado com sucesso!');
    } catch {
      return sendToast('error', 'Não foi possível realizar a operação!');
    } finally {
      setPointerEvents('all');
    }
  };

  return (
    <PaymentContainer action="" onSubmit={handlePaymentForm}>
      <p>PAGAMENTO</p>
      <CardElement
        className="credit-card"
        options={{
          iconStyle: 'solid',
          style: {
            base: { fontSize: '15px' },
          },
        }}
      />
      <button
        type="submit"
        tabIndex={pointerEvents === 'all' ? 0 : -1}
        style={{ pointerEvents: pointerEvents as any }}
      >
        Finalizar Compra
      </button>
    </PaymentContainer>
  );
}

export default PaymentCheckout;

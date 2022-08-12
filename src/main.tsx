import React from 'react';
import ReactDOM from 'react-dom/client';
// Provider do react-redux:
import { Provider } from 'react-redux';
// Componentes para utilização do Stripe (pagamentos)
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './services/stripe/stripe';
// Store do app para utilização do react-redux:
import { store } from './services/store/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>,
);

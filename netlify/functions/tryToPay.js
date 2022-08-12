// Habilita o uso de vaiáveis de ambiente no NODE
require('dotenv').config();
// Inicializa Stripe utilizando minha chave secreta:
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// ServerLess Function:
exports.handler = async (event) => {
  try {
    // "amount" deve conter o valor a ser pago em centavos!
    const { amount } = JSON.parse(event.body);
    // Tenta realizar o pagamento:
    const tryToPay = await stripe.paymentIntents.create({
      amount,
      currency: 'brl',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ tryToPay }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify({
        errors: ['Não foi possível concluir o pagamento!'],
      }),
    };
  }
};

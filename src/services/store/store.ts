// Métodos da biblioteca 'redux' necessários para criar a store:
import {
  // applyMiddleware,
  // compose,
  legacy_createStore as createStore,
} from 'redux';
// Root-reducer da store:
import rootReducer from './root-reducer';

// Middlewares:
// const middlewares = [];
// const composedEnhancers = compose(applyMiddleware(...middlewares));

// criando a store:
export const store = createStore(rootReducer, undefined);

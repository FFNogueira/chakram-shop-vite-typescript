import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Serviço de Proteção de rotas:
import ProtectedRoute from '../services/protected-route';
// páginas:
import Home from '../pages/home';
import SignIn from '../pages/sign-in';
import NotFound from '../pages/404';
import Products from '../pages/products';
import Cart from '../pages/cart';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/signIn"
        element={<ProtectedRoute prevPath="/signIn" myElement={<SignIn />} />}
      />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MyRoutes;

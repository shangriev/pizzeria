import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MainLayout from './Layouts/MainLayout';
// import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';

const Cart = React.lazy(() => import('./pages/Cart'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Main />} />
        <Route path='cart' element={<React.Suspense fallback={<div>Loading...</div>} > <Cart /></React.Suspense>} />
        <Route path='*' element={<React.Suspense><NotFound /></React.Suspense>} />
      </Route>
    </Routes >
  );
}

export default App;

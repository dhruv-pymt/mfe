import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Cart = React.lazy(() => import('cart/Module'));

const Payments = React.lazy(() => import('payments/Module'));

const Settings = React.lazy(() => import('settings/Module'));

export function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        <li>
          <Link to="/payments">Payments</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/payments" element={<Payments />} />

        <Route path="/settings" element={<Settings />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;

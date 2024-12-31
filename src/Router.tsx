import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Checkout from './pages/Checkout';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Router;
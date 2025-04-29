import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';
import Home from './Home'; // your homepage content
import Shop from './shop'; // your homepage content
import { useEffect } from 'react';
import Single_shop from './single-shop';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thank-you';
import Login from './login';
import Register from './register';
import ForgotPass from './forgot-password';
import MyAccount from './my-account';

export default function App() {
  const location = useLocation(); // to track route changes

  useEffect(() => {
    // Check if the current route is Home
    if (location.pathname === '/') {
      document.body.classList.add('home-page'); // Add the class for Home page
    } else {
      document.body.classList.remove('home-page'); // Remove the class for other pages
    }
  }, [location]); // Run effect on location change
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-shop" element={<Single_shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/my-account" element={<MyAccount />} />

      </Routes>
    </>
  );
}

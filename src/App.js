import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Sellers from './pages/sellers/Sellers';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
import Seller from './pages/seller/Seller';
import Product from './pages/product/Product';
import Follow from './pages/follow/Follow';
import Cart from './pages/cart/Cart';
import Account from './pages/account/Account';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" limit={1} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product:id" element={<Product />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/seller:id" element={<Seller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

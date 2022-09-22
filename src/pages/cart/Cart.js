import React from 'react';
import CartItems from '../../components/cartitems/CartItems';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './cart.css';

const Cart = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
        <CartItems />
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Cart

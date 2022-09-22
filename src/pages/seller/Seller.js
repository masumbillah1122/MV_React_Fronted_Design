import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SellerInfo from '../../components/sellerinfo/SellerInfo';
import './seller.css';

const Seller = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
        <SellerInfo />
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Seller

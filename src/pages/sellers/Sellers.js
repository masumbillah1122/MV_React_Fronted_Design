import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SellFilters from '../../components/sellfilters/SellFilters';
import './sellers.css';

const Sellers = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
        <SellFilters/>
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Sellers

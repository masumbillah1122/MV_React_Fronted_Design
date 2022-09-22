import React from 'react';
import './shop.css';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import Filter from '../../components/filters/Filter';

const Shop = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
       <Filter/>
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Shop

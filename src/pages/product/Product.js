import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProductDetails from '../../components/productdetails/ProductDetails';
import './product.css';

const Product = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
        <ProductDetails/>
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Product

import React from 'react';
import './follow.css';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import FollowCustomer from '../../components/followcustomer/FollowCustomer';

const Follow = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
        <FollowCustomer/>
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Follow

import React from 'react';
import AccountUser from '../../components/accountuser/AccountUser';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './account.css';

const Account = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
        <AccountUser />
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Account
import React from 'react';
import Footer from '../../components/footer/Footer';
import SignIn from '../../components/forms/SignIn';
import Header from '../../components/header/Header';
import './forms.css';

const Login = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
       <SignIn/>
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Login

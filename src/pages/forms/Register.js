import React from 'react';
import Footer from '../../components/footer/Footer';
import SignUp from '../../components/forms/SignUp';
import Header from '../../components/header/Header';
import "./forms.css";

const Register = () => {
  return (
    <div className="wrapper">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
        <SignUp/>
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Register
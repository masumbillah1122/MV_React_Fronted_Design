import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="form-row">
      <div className="form">
        <form>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-btn">
            <button><FontAwesomeIcon icon={faLock}/>Login</button>
          </div>
          <div className="form-footer">
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn

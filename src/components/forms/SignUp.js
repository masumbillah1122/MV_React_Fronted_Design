import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
      <div className="form-row">
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="r_password">Retype Password</label>
            <input type="password" id="r_password" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" required />
          </div>
          <div className="form-btn">
            <button>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              Register
            </button>
          </div>
          <div className="form-footer">
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    );
}

export default SignUp
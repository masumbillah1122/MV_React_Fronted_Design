import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignIn = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('You have successfully logged in!');
      navigate('/');
    } catch (error) {
      toast.error('Invalid Email or Password!');
    }
  }

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
  })

  return (
    <div className="form-row">
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-btn">
            <button>
              <FontAwesomeIcon icon={faLock} />
              Login
            </button>
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

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const SignUp = () => {

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  const submitHandler = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password doesn't match!");
    return;
    }
    try {
      const { data } = await axios.post('/api/users/register', {
        name,
        email,
        password,
        address,
        phone
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('You have successfully registered!');
      navigate('/');
    } catch (error) {
      toast.error("Registration failed, Please try again!");
    }
  }

    return (
      <div className="form-row">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="r_password">Retype Password</label>
            <input
              type="password"
              id="r_password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
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
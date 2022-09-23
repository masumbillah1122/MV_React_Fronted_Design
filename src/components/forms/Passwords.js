import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Passwords = ({ setOpen }) => {

    const navigate = useNavigate();
    
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;


    const [password, setPassword] = useState();
    const [rPassword, setRPassword] = useState();


     const handlerUpdatePassword = async (e) => {
       e.preventDefault();

         // if equal password with r_password
         if (password === rPassword) {
             try {
               const { data } = await axios.put("/api/users/update", {
                 _id: userInfo._id,
                 password,
               });
               localStorage.removeItem("userInfo", JSON.stringify(data));
                 toast.success("Password successfully updated!");
                 navigate('/login');
             } catch (error) {
               toast.error("Password not updated!");
             }
         } else {
             toast.error("Password doesn't match!");
       }
         
     };

  return (
    <div className="passwords">
      <form onSubmit={handlerUpdatePassword}>
        <div className="close-form" onClick={() => setOpen(false)}>
          X
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="r_pass">Retype Password</label>
          <input
            type="password"
            id="r_pass"
            onChange={(e) => setRPassword(e.target.value)}
            value={rPassword}
            required
          />
        </div>
        <div className="form-btn">
          <button>
            <FontAwesomeIcon icon={faRefresh} />
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default Passwords

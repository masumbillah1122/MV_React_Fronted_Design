import React, { useState } from 'react'

const Passwords = ({setOpen}) => {


    const [password, setPassword] = useState();
    const [rPassword, setRPassword] = useState();

  return (
    <div className="passwords">
      <form>
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
      </form>
    </div>
  );
}

export default Passwords

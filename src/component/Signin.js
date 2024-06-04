import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../App';

function Signin() {
  const { DarkMode, DarkModeFun } = useContext(data);

  const textStyle = DarkMode ? { color: '#e5e5e5' } : { color: '#093545' };
  const inputStyle = DarkMode 
    ? { backgroundColor: '#e5e5e5', color: '#093545' }
    : { backgroundColor: '#093545', color: '#e5e5e5' };
  const buttonStyle = DarkMode 
    ? { color: '#e5e5e5', backgroundColor: '#20df7f' }
    : { color: '#093545', backgroundColor: '#20df7f' };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <h2 className="fs-1" style={textStyle}>Sign In</h2>
      <p className="fs-6 text-secondary">Sign in and start shopping in an easy way</p>
      <form className="d-flex flex-column justify-content-center align-items-center gap-4 p-3 p-md-0">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-100 p-2 ps-3 pe-3" 
          style={inputStyle} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-100 p-2 ps-3 pe-3" 
          style={inputStyle} 
        />
        <div className="d-flex justify-content-between align-items-center w-100" style={textStyle}>
          <div>
            <input type="checkbox" className="me-1" />
            <label>Remember Me</label>
          </div>
          <Link to="#">Forget Password?</Link>
        </div>
        <input 
          type="submit" 
          value="Login" 
          className="btn btn-lg w-100" 
          style={buttonStyle} 
        />
      </form>
    </div>
  );
}

export default Signin;

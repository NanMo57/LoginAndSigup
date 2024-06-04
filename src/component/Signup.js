import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../App';

function Signup() {
  const { DarkMode } = useContext(data);

  const textStyle = DarkMode ? { color: '#e5e5e5' } : { color: '#093545' };
  const inputStyle = DarkMode 
    ? { backgroundColor: '#e5e5e5', color: '#093545' }
    : { backgroundColor: '#093545', color: '#e5e5e5' };
  const buttonStyle = DarkMode 
    ? { color: '#e5e5e5', backgroundColor: '#20df7f' }
    : { color: '#093545', backgroundColor: '#20df7f' };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <h2 className="fs-1" style={textStyle}>Sign Up</h2>
      <p className="fs-6 text-secondary">Sign up and start shopping in an easy way</p>
      <form className="d-flex flex-column justify-content-center align-items-center gap-4 p-3 p-md-0">
        <div className="d-flex justify-content-between align-items-center gap-2 w-100">
          <input 
            type="text" 
            placeholder="First Name" 
            className="w-100 p-2 ps-3 pe-3" 
            style={inputStyle} 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            className="w-100 p-2 ps-3 pe-3" 
            style={inputStyle} 
          />
        </div>
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
        <input 
          type="password" 
          placeholder="Repeat Password" 
          className="w-100 p-2 ps-3 pe-3" 
          style={inputStyle} 
        />
        <select 
          className="w-100 p-2 ps-3 pe-3" 
          style={inputStyle}
          defaultValue="Country"
        >
          <option value="Country" disabled>Country</option>
          <option value="Jordan">Jordan</option>
          <option value="Egypt">Egypt</option>
          <option value="United_State">United States</option>
          <option value="Saudia_Arabia">Saudi Arabia</option>
          <option value="Algeria">Algeria</option>
          <option value="Germany">Germany</option>
        </select>
        <input 
          type="submit" 
          value="Signup" 
          className="btn btn-lg w-100" 
          style={buttonStyle} 
        />
      </form>
    </div>
  );
}

export default Signup;

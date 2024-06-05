import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { data } from '../App';

function Header() {
  const { DarkMode, DarkModeFun, Path,setLogin } = useContext(data);

  const linkStyle = DarkMode ? { color: '#e5e5e5' } : { color: '#093545' };

  return (
    <header className="d-flex justify-content-end p-5 pt-2 pb-2" style={linkStyle}>
      <nav>
        {Path === '/LoginAndSigup' ? (
          <span className="fs-6 me-3">
            <Link to='/SignUp' style={linkStyle}>Sign Up</Link>
          </span>
        ) : Path === '/SignUp'? (
          <span className="fs-6 me-3">
            <Link to='/LoginAndSigup' style={linkStyle}>Sign In</Link>
          </span>
        ): Path === '/LoginAndSigup/Home'?(
          <span className="fs-6 me-3">
            <Link to='/LoginAndSigup' style={linkStyle} onClick={()=>setLogin(false)}>Log Out</Link>
          </span>
        ):(
          <span className="fs-6 me-3">
            <Link to='/LoginAndSigup' style={linkStyle}>Sign In</Link>
          </span>
        )}
        <span className="fs-3">
          {DarkMode ? (
            <MdOutlineDarkMode onClick={DarkModeFun} />
          ) : (
            <MdDarkMode onClick={DarkModeFun} />
          )}
        </span>
      </nav>
    </header>
  );
}

export default Header;

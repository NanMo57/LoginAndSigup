import React, { useContext ,useState} from 'react';
import { Link } from 'react-router-dom';
import { data } from '../App';
import axios from 'axios';

function Signin() {
  const { buttonStyle,inputStyle,textStyle,MessRef,viewMess,usenavigation,setLogin} = useContext(data);

  const [email,setEmail] = useState('')
  const [ErrorEmail,setErrorEmail] = useState('')


  const [pass,setPass] = useState('')
  const [ErrorPass,setErrorPass] = useState('')

  const [ErrorSend,setErrorSend]=useState('')

  const [correct,setCorrect] = useState('false')


  const MessStyle = correct ? { color: '#e5e5e5', backgroundColor: '#20df7f' }:{ color: '#000', backgroundColor: 'red' }


  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    setErrorEmail('');
    setErrorPass('');

    let valid = true;

    if (!email) {
      setErrorEmail('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail('Email address is invalid');
      valid = false;
    }

    if (!pass) {
      setErrorPass('Password is required');
      valid = false;
    } else if (pass.length < 6) {
      setErrorPass('Password must be at least 6 characters');
      valid = false;
    }

    if (valid) {
      let userData = {
        "Email":email,
        "Pass":pass,
      }

      axios.get('https://my-json-server.typicode.com/NanMo57/DataJSON/Users').then(req=>req.data.some(ele=>ele.Email === userData.Email && ele.Pass === userData.Pass)).then(res=>{ 
        if(res){
            setCorrect(true)
            setLogin(true)
            usenavigation('/LoginAndSigup/Home')
        }else{
          setErrorSend('The account is not registered')
          setCorrect(false)
          viewMess()
        }
      })
    }
  };

  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 position-relative">
      <h2 className="fs-1" style={textStyle}>Sign In</h2>
      <p className="fs-6 text-secondary">Sign in and start shopping in an easy way</p>
      <form className="d-flex flex-column justify-content-center align-items-center gap-4 p-3 p-md-0" onSubmit={(e)=>handleOnSubmit(e)}>
      <div className='w-100'>
        <input 
          type="email" 
          placeholder="Email" 
          className="w-100 p-2 ps-3 pe-3" 
          style={inputStyle} 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <p>{ErrorEmail}</p>
      </div>
      <div className='w-100'>
        <input 
          type="password" 
          placeholder="Password" 
          className="w-100 p-2 ps-3 pe-3" 
          style={inputStyle} 
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
        />
        <p>{ErrorPass}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100" style={textStyle}>
        <div>
          <input type="checkbox" className="me-1" id='remember' />
          <label htmlFor='remember'>Remember Me</label>
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
    <div className='ErrorSend position-absolute text-center w-md-50 rounded-pill text-trans text-uppercase' ref={MessRef} style={MessStyle}>
      {ErrorSend}
    </div>
    </>
  );
}

export default Signin;

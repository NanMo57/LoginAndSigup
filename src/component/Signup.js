import React, { useContext,useState } from 'react';
import { data } from '../App';
import axios from 'axios';

function Signup() {
  const { buttonStyle,inputStyle,textStyle,MessRef,viewMess,usenavigation} = useContext(data);

  const [fName,setFName] = useState('')
  const [ErrorFName, setErrorFName] = useState('');

  const [lName,setLName] = useState('')
  const [ErrorLName, setErrorLName] = useState('');

  const [email,setEmail] = useState('')
  const [ErrorEmail,setErrorEmail] = useState('')


  const [pass,setPass] = useState('')
  const [ErrorPass,setErrorPass] = useState('')


  const [checkPass,setCheckPass] = useState('')
  const [ErrorCheckPass,setErrorCheckPass] = useState('')

  const [country,setCountry] = useState('')
  const [ErrorCountry,setErrorCountry] = useState('')

  const [ErrorSend,setErrorSend]=useState('')

  const [correct,setCorrect] = useState('false')


  const MessStyle = correct ? { color: '#e5e5e5', backgroundColor: '#20df7f' }:{ color: '#000', backgroundColor: 'red' }

    const handleOnSubmit = (e) => {
    e.preventDefault();
    
    setErrorFName('');
    setErrorLName('');
    setErrorEmail('');
    setErrorPass('');
    setErrorCheckPass('');
    setErrorCountry('');

    let valid = true;

    if (!fName) {
      setErrorFName('First Name is required');
      valid = false;
    }

    if (!lName) {
      setErrorLName('Last Name is required');
      valid = false;
    }

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

    if (pass !== checkPass) {
      setErrorCheckPass('Passwords do not match');
      valid = false;
    }

    if (!country || country === 'Country') {
      setErrorCountry('Country is required');
      valid = false;
    }

    if (valid) {
      let userData = {
        "Name":fName+lName,
        "Email":email,
        "Pass":pass,
        "Country":country
      }
      function sendData(){
         axios.post('https://my-json-server.typicode.com/NanMo57/DataJSON/Users',userData)
        .then(req=>{
          if(req.statusText === "Created"){
            setErrorSend('The account has been created')
            setCorrect(true)
          }
        })
      }
      axios.get('https://my-json-server.typicode.com/NanMo57/DataJSON/Users').then(req=>req.data.some(ele=>ele.Email === userData.Email)).then(res=>{ 
        if(res){
          setErrorSend('This email is present before')
            setCorrect(false)
        }else{
          sendData()
          viewMess()
        }
        viewMess('/LoginAndSigup')
      })

    }
  };

  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <h2 className="fs-1" style={textStyle}>Sign Up</h2>
      <p className="fs-6 text-secondary">Sign up and start shopping in an easy way</p>
      <form className="d-flex flex-column justify-content-center align-items-center gap-4 p-3 p-md-0" onSubmit={(e)=>handleOnSubmit(e)}>
        <div className="w-100 d-flex justify-content-between align-items-center gap-2">
          <div>
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-100 p-2 ps-3 pe-3" 
              style={inputStyle} 
              value={fName}
              onChange={(e)=>setFName(e.target.value)}
            />
            <p>{ErrorFName}</p>
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-100 p-2 ps-3 pe-3" 
              style={inputStyle} 
              value={lName}
              onChange={(e)=>setLName(e.target.value)}
            />
            <p>{ErrorLName}</p>
          </div>
        </div>
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
        
        <div className='w-100'>
          <input 
            type="password" 
            placeholder="Repeat Password" 
            className="w-100 p-2 ps-3 pe-3" 
            style={inputStyle} 
            value={checkPass}
            onChange={(e)=>setCheckPass(e.target.value)}
          />
          <p>{ErrorCheckPass}</p>
        </div>
        <div className='w-100'>
          <select 
            className="w-100 p-2 ps-3 pe-3" 
            style={inputStyle}
            defaultValue="Country"
            onChange={(e)=>setCountry(e.target.value)}
          >
            <option value="Country" disabled>Country</option>
            <option value="Jordan">Jordan</option>
            <option value="Egypt">Egypt</option>
            <option value="United_State">United States</option>
            <option value="Saudia_Arabia">Saudi Arabia</option>
            <option value="Algeria">Algeria</option>
            <option value="Germany">Germany</option>
          </select>
          <p>{ErrorCountry}</p>
        </div>
        
        <input 
          type="submit" 
          value="Signup" 
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

export default Signup;

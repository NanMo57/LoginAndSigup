import { createContext, useState, useEffect , useRef} from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Waves from "./component/Waves";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Header from "./component/Header";
import Home from "./component/Home";
import ErrorPage from "./component/ErrorPage";

export const data = createContext();

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [DarkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const [Path, setPath] = useState(location.pathname);

  const MessRef = useRef();
  const usenavigation = useNavigate()


  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const DarkModeFun = () => {
    setDarkMode(!DarkMode);
    document.body.style.backgroundColor = DarkMode ? '#e5e5e5' : '#093545';
  };

  const [Login,setLogin] = useState(false)

  const textStyle = DarkMode ? { color: '#e5e5e5' } : { color: '#093545' };
  const inputStyle = DarkMode 
    ? { backgroundColor: '#e5e5e5', color: '#093545' }
    : { backgroundColor: '#093545', color: '#e5e5e5' };
  const buttonStyle = DarkMode 
    ? { color: '#e5e5e5', backgroundColor: '#20df7f' }
    : { color: '#093545', backgroundColor: '#20df7f' };
  

  function viewMess(page){
      MessRef.current.style.display = 'block';
      setTimeout(()=>{
        MessRef.current.style.display = 'none';
        usenavigation(page)
      },2000)
  }

  return (
    <data.Provider value={{DarkMode, setDarkMode, DarkModeFun, Path ,textStyle,inputStyle,buttonStyle,MessRef,viewMess,usenavigation,Login,setLogin}}>
      <div className="d-flex flex-column justify-content-between content">
        <Header />
        <div>
          <Routes>
            <Route path='/LoginAndSigup' element={<Signin />} />
            <Route path='SignUp' element={<Signup />} />
            <Route path="/LoginAndSigup/Home" element={<Home/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </div>
        <Waves />
      </div>
  </data.Provider>
  );
}

export default App;

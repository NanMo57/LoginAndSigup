import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Waves from "./component/Waves";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Header from "./component/Header";

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

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const DarkModeFun = () => {
    setDarkMode(!DarkMode);
    document.body.style.backgroundColor = DarkMode ? '#e5e5e5' : '#093545';
  };

  return (
    <data.Provider value={{DarkMode, setDarkMode, DarkModeFun, Path }}>
      <div className="d-flex flex-column justify-content-between content">
        <Header />
        <div>
          <Routes>
            <Route path='/LoginAndSigup' element={<Signin />} />
            <Route path='SignUp' element={<Signup />} />
          </Routes>
        </div>
        <Waves />
      </div>
  </data.Provider>
  );
}

export default App;

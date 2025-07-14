import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

/*import {
   BrowserRouter as Router,
   Routes,
   Route,
   } from "react-router-dom";*/
function App() {
  //whether dark mode is enabled
  const[mode, setMode] = useState('light');
  //Set Alert for modes
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    //Set time for alert message
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

    const removeBodyClasses = ()=>{
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-danger')
      document.body.classList.remove('bg-success')
    }
  
  const toggleMode= (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils-Dark Mode';
      /*setInterval(() =>{
        document.title = 'TextUtils is Amazing Mode'
      },2000);
      setInterval(() =>{
        document.title = 'Install TextUtils Now'
      },1500);*/
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
       document.title = 'TextUtils-Light Mode';
    }
  }
  return (
  <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
      
    <Routes>
    <Route path="*" element={<TextForm showAlert={showAlert} heading=" Try TextUtils- Word Counter,Character Counter" mode={mode} />} />
    <Route path="/about" element={<About mode= {mode} />} />
    </Routes>
  </div>
  </Router>
  </>
  );
}
export default App;

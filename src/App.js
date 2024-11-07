import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,    // Ensure this line is here
//   Route,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState(`light`);
  // these are removed with the help of ternary operator 
  // const [modetext, setModetext] = useState(`Dark`);
  // const [modetxt, setModetxt] = useState(`dark`);

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success");

      // document.title = `Maven's Light Mode` 

      // setInterval(()=>{
      //   document.title=`TextMaven is Amazing Mode`;
      // },2000);

      // setInterval(()=>{
      //   document.title=`Install TextMaven Now`;
      // },1500);

      // these are removed with the help of ternary operator 
      // setModetext('Dark'); 
      // setModetxt('dark'); 
    }
    else {
      setMode('dark');
      showAlert("Dark Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = '#042743';

      // document.title = `Maven's Dark Mode`

      // these are removed with the help of ternary operator 
      // setModetext('Light'); 
      // setModetxt('light'); 
    }
  }


  const [alert, setAlert] = useState(null); // alert 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    // Set time out 
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  return (
    <>
      <Navbar title="TypeMaven" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
      <TextForm heading="Type Text Below To Analyze " mode={mode} showAlert={showAlert} />
        </div>
    </>
  );
}

// note always end : non closing tag's with / like for <hr/> and <img  /> etc.
// bebel compile's it 


{/* 
  // when use routing we did not using it because github not support well for it 
  <Router>
  <Navbar title="TypeMaven" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
  <Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/home" element={<TextForm heading="Type Text Below To Analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
          </div> 
      </Router>
      */}

      
      export default App;
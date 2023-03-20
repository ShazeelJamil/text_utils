import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import css from './css/App.css';
// import About from './components/About';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
function App() {
  return (
    // <Router>
    //   <Navbar title="TextUtils" style={{ css }} mode='dark' />
    //   <Routes>
    //     <Route path='/' element={<div className='container'> <TextForm title='Enter the Text: ' /></div>} />
    //     {/* <Route path='/about' element={<About mode='dark' />} /> */}
    //     <Route path='/about' element={<About />} />
    //   </Routes>
    // </Router>
    
    <div>
      <Navbar title="TextUtils" style={{ css }} mode='dark' />
      <div className='container'>
         <TextForm title='Enter the Text: ' />
         </div>
      {/* <About mode='dark' /> */}
    </div>

  );
}

export default App;

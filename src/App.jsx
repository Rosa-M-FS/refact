import React from 'react';
import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';
import EmployeeList from './components/Employees';
import Footer from './components/Footer';

function App() {
  return(
    <div className='envoltura'>
      <Header/>
      <EmployeeList/>
      <Calculator/>
      <Footer/>
    </div>
  )

}

export default App;
    
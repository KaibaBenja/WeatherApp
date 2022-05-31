import React from 'react';
import './Css/App.css'
import Navbar from './Components/Navbar';
import WeatherPanel from './Components/WeatherPanel';


const App = () => {



  return ( 
    <div className='App'>
      <Navbar/>
      <WeatherPanel />
    </div>
  );
}


export default App
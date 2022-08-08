import logo from './logo.svg';
import './App.css';

import CompShowMsjs from './msj/ShowMsjs';
import CompCreateMsj from './msj/CreateMsj';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowMsjs />} />
            <Route path='/create' element={ <CompCreateMsj />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

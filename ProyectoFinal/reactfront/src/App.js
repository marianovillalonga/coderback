import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowProducts from './product/ShowProducts';
import CompCreateProduct from './product/CreateProduct';
import CompEditProduct from './product/EditProduct';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowProducts />} />
            <Route path='/create' element={ <CompCreateProduct />} />
            <Route path='/edit/:id' element={ <CompEditProduct />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

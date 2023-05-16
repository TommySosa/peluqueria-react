import './App.css';
import Carrousel from './components/Carrousel';
import Header from './components/Header.js';
import About from './components/About.js'
import Products from './components/Products';


function App() {
  return (
    <div className="App container-fluid">
      <Header></Header>
      <Carrousel></Carrousel>
      <About></About>
      <div >
        <div>
          <h2>ENCONTRÁ TUS MARCAS </h2>
          <h2>FAVORITAS EN LISS GOLD</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='row'>
            <div className='col'>
              <Products nombre="Alisado" precio="1.500,00"></Products>
            </div>
            <div className='col'>
              <Products nombre="Alisado" precio="1.500,00"></Products>
            </div>
            <div className='col'>
              <Products nombre="Alisado" precio="1.500,00"></Products>
            </div>
            <div className='col'>
              <Products nombre="Alisado" precio="1.500,00"></Products>
            </div>
          </div>
        </div>
        
      </div>


    </div>
  );
}

export default App;

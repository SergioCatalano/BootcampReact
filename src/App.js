import './App.css';
import Mensaje from './Mensaje.js'

function App() {

  const hola = "hola mmuymendo";
  return (
    <div className="App">
      {hola}
      <Mensaje color='red' message='Estamos trabajndo '/>
      <Mensaje color='green' message='En un curso'/>
      <Mensaje color='yellow' message='de REact'/>
    </div>
  );
}

export default App;

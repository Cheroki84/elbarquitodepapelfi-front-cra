import logo from './utils/img/logo1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className='Text'>
        <h1>
          Sitio web en construcción
        </h1>
      </div>
      <div className="centerFooter">
        <div>
          <p>
            © 2020-{new Date().getFullYear()} El Barquito de Papel - Fotografía Infantil
          </p>
        </div>
        <div>

          <p>
            Created by <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/miguelangelmorato84/">Miguel Ángel Morato</a>
          </p>
        </div>
      </div>

    </div>

  );
}

export default App;

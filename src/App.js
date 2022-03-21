import {useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.matomo.cloud/catherinemdsportofliovercelapp.matomo.cloud/container_NrtdNiyk.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script)
    }
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jss</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

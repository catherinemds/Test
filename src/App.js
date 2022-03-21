import {useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

useEffect(() => {
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://catherinemdsportofliovercelapp.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='//cdn.matomo.cloud/catherinemdsportofliovercelapp.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();
}, [])

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
        <button>Hola haz click aca</button>
        <button>No, haz click aca</button>
      </header>
    </div>
  );
}

export default App;


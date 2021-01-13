import logo from './logo.svg';
import './App.css';
import { EnvConfig } from './EnvConfig';

const config = new EnvConfig() 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Your app is running!</h2>
        <p>Env name is : { config.envName}</p>
        <p>API URL is : { config.apiUrl}</p>
      </header>
    </div>
  );
}

export default App;

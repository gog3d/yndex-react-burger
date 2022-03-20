import logo from './logo.svg';
import './App.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tab> Hello</Tab>
      </header>
    </div>
  );
}

export default App;

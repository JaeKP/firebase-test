import logo from "./logo.svg";
import "./App.css";
import packageInfo from "../package.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World</p>
        <p>변경 사항 ㅇㅅㅇ</p>
        <p>ENV: {process.env.REACT_APP_ENV}</p>
        <p>Ver.{packageInfo.version}</p>
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

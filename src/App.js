import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import MainSpace from "./Components/MainSpace";
import cn from "classnames";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainSpace />
      </header>
    </div>
  );
}

export default App;

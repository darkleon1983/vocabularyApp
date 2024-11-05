import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MainSpace from "./Pages/TestingPage";
import NotFound from "./Pages/NotFoundBlock";
import cn from "classnames";
import Testingpage from "./Pages/TestingPage";
import Project from "./Pages/Project/project";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/training" element={<Testingpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

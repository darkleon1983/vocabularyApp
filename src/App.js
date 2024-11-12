import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MainSpace from "./Pages/TestingPage";
import NotFound from "./Pages/NotFoundBlock";
import cn from "classnames";
import Testingpage from "./Pages/TestingPage";
import Project from "./Pages/Project/project";
import { createContext, useState } from "react";
import words from "../src/Mocks/words.json";

export const AppContext = createContext();
// console.log("App", AppContext);

function App() {
  const [arrayOfCurrentIndexes, setArrayOfCurrentIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);
  const [currentWord, setCurrentWord] = useState(
    words[arrayOfCurrentIndexes[0]]
  );
  const handleAnswer = () => {
    const firstElement = arrayOfCurrentIndexes.shift();
    setArrayOfCurrentIndexes(arrayOfCurrentIndexes);
    setCurrentWord(words[arrayOfCurrentIndexes[0]]);
    console.log(
      "in loop",
      arrayOfCurrentIndexes,
      words[arrayOfCurrentIndexes[0]].word
    );
  };
  // console.log("App", arrayOfCurrentIndexes);
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          arrayOfCurrentIndexes,
          setArrayOfCurrentIndexes,
          handleAnswer,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/training" element={<Testingpage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

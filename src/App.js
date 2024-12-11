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
import adjectives from "../src/Mocks/adjectives.json";
import makeFourItemsArray from "./utils";

export const AppContext = createContext();
// console.log("App", AppContext);

function App() {
  const [arrayOfCurrentIndexes, setArrayOfCurrentIndexes] = useState([
    ...Array(words.length).keys(),
  ]);

  const [wordsQuantity, setWordsQuantity] = useState(
    arrayOfCurrentIndexes.length
  );
  const [wrightAnswers, setWrightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const [currentWord, setCurrentWord] = useState(
    words[arrayOfCurrentIndexes[0]]
  );
  const [arrayOfAnswers, setArrayOfAnswers] = useState([]);

  const handleAnswer = () => {
    const firstElement = arrayOfCurrentIndexes.shift();
    setArrayOfCurrentIndexes(arrayOfCurrentIndexes);
    setCurrentWord(words[arrayOfCurrentIndexes[0]]);
    makeFourItemsArray(
      adjectives,
      setArrayOfAnswers,
      words[arrayOfCurrentIndexes[0]].translation
    );
  };
  const wrightAnswersAddingHandler = () => {
    setWrightAnswers(wrightAnswers + 1);
  };
  const wrongAnswersAddingHandler = () => {
    setWrongAnswers(wrongAnswers + 1);
  };
  console.log("array of indexes", arrayOfCurrentIndexes);
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          arrayOfCurrentIndexes,
          setArrayOfCurrentIndexes,
          handleAnswer,
          currentWord,
          arrayOfAnswers,
          setArrayOfAnswers,
          wordsQuantity,
          wrongAnswers,
          wrightAnswers,
          wrightAnswersAddingHandler,
          wrongAnswersAddingHandler,
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

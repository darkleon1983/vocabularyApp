import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MainSpace from "./Pages/TestingPage";
import NotFound from "./Pages/NotFoundBlock";
import cn from "classnames";
import Testingpage from "./Pages/TestingPage";
import Project from "./Pages/Project";
import { createContext, useState } from "react";
import words from "../src/Mocks/words.json";
import adjectives from "../src/Mocks/adjectives.json";
import nouns from "./Mocks/nouns.json";
import verbs from "./Mocks/verbs.json";
import adverbs from "./Mocks/adverbs.json";
import answersArray from "./Mocks/answersArray.json";
import makeFourItemsArray from "./utils";
import BurgerComponent from "./Components/Burger";
import MobileHeader from "./Components/MobileHeader";
import Resume from "./Pages/Resume";

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
  const [isStatisticReady, setIsStatisticReady] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const statisticHandler = () => {
    setIsStatisticReady(!isStatisticReady);
  };

  const handleAnswer = () => {
    const firstElement = arrayOfCurrentIndexes.shift();
    setArrayOfCurrentIndexes(arrayOfCurrentIndexes);
    setCurrentWord(words[arrayOfCurrentIndexes[0]]);

    // if (currentWord.partOfSpeech == "adjective") {
    //   setQuestionArray(adjectives);
    //   console.log("adjectives");
    // } else if (currentWord.partOfSpeech == "noun") {
    //   console.log("nouns");
    //   setQuestionArray(nouns);
    // } else if (currentWord.partOfSpeech == "adverbs") {
    //   console.log("adverbs");
    //   setQuestionArray(adverbs);
    // } else {
    //   console.log("verbs");
    //   setQuestionArray(verbs);
    // }
    // switch (currentWord.partOfSpeech) {
    //   case "adjective": {
    //     activeArrayHandler(adjectives);
    //     console.log("adjectives");
    //     // return questionArray;
    //   }
    //   case "noun": {
    //     activeArrayHandler(nouns);
    //     console.log("nouns");
    //     // return questionArray;
    //   }
    //   case "verb": {
    //     activeArrayHandler(verbs);
    //     console.log("verbs");
    //     // return questionArray;
    //   }
    //   case "adverb": {
    //     activeArrayHandler(adverbs);
    //     console.log("adverbs");
    //     // return questionArray;
    //   }
    //   default:
    //     console.log("default");
    //     activeArrayHandler(test);
    // }
    // console.log(currentWord.partOfSpeech);
    // console.log(questionArray);
    makeFourItemsArray(
      answersArray,
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
  const [isMobile, setIsMobile] = useState(false);
  const burgerHandler = () => {
    console.log("hello, Burger");
    setIsMobile(!isMobile);
  };
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
          statisticHandler,
          isStatisticReady,
          isStarted,
          setIsStarted,
          wordsQuantity,
          isMobile,
          setIsMobile,
          burgerHandler,
        }}
      >
        <div className={cn("md:hidden")}>
          <Header />
        </div>

        <div className={cn("lg:invisible xl:invisible md:visible")}>
          <MobileHeader />
        </div>

        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/training" element={<Testingpage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

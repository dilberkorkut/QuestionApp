import { useState } from "react";
import QuestionCounter from "./component/questionCounter/QuestionCounter";
import "./App.css";
import Timer from "./component/timer/Timer";
import Question from "./component/question/Question";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="header-container">
          <QuestionCounter />
          <Timer />
        </div>
        <Question />
      </div>
    </>
  );
}

export default App;

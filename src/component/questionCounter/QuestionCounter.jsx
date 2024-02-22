import React from "react";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import "./QuestionCounter.css";

function QuestionCounter() {
  let { counter } = useContext(appContext);

  return <h1>Question {counter} </h1>;
}

export default QuestionCounter;

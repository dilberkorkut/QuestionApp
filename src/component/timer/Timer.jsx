import React from "react";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import "./Timer.css";

function Timer() {
  let { timer, setTimer } = useContext(appContext);
  return(
  <h2 className="timer">Time: {timer}</h2>
  )
}

export default Timer;

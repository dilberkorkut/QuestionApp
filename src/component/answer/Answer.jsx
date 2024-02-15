import React from 'react'
import "./Answer.css"
import { useContext } from 'react'
import { appContext } from '../../context/AppContext'

function Answer({currentQuestion}) {

    const {counter, setCounter, setTimer, correctCounter, setCorrectCounter, chosenAnswers, setChosenAnswers} = useContext(appContext);

    function handleClick(index) {
        const answer = document.querySelector(".answer-container");
        if(currentQuestion.options[index] == currentQuestion.answer) {
            chosenAnswers.push(currentQuestion.options[index]);
            setCorrectCounter(correctCounter + 1);
            setCounter(counter + 1);
            setTimer(30);
            answer.style.visibility = "hidden";
        } else {
            chosenAnswers.push(currentQuestion.options[index]);
            setCounter(counter + 1);
            setTimer(30);
            answer.style.visibility = "hidden";
        }
    }

  return (
    <div className="answer-container">
        {currentQuestion.options.map((option, index) => (
          <button className="option" key={index} onClick={() =>handleClick(index)}>{option}</button>
        ))}
    </div>
  )
}

export default Answer
import questions from "../../questions";
import { appContext } from "../../context/AppContext";
import { useContext, useEffect } from "react";
import "./Question.css";

const Question = () => {
  const { timer, setTimer, counter, setCounter } = useContext(appContext);
  const currentQuestion = questions[counter - 1];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setTimer(30);
        setCounter(counter + 1);

        if (counter >= questions.length) {
          setCounter(1);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter, setCounter, timer, setTimer]);

  return (
    <div className="question-container">
      <img src={currentQuestion.media} alt={currentQuestion.answer} />
      <div className="question-border">
        <p>{currentQuestion.question}</p>
      </div>
      <div className="answer-container">
        {currentQuestion.options.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
      </div>
    </div>
  );
};

export default Question;

import React from 'react'
import { useContext } from 'react'
import { appContext } from '../../context/AppContext'

function Result() {
  const {correctCounter, chosenAnswers} = useContext(appContext)

  return (
    <div>
      <h1>{correctCounter}</h1>
      <ul>
        {chosenAnswers.map((answer) => {
          return(
            <li key={answer}>
              {answer}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Result
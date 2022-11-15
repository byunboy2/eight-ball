import { defaultAnswers } from "./answers.js"
import _ from "underscore"
import {useState} from "react"
import "./EightBall.css"

/** EightBall: Shows starting message "Think of a Question"
 *  when clicked, show instead a random answer and change color.
 *
 *  Props:
 *  - answers: array of {msg, color} objects
 *
 *  State:
 *  - answer: {msg, color} of current answer
 *
 *  App -> EightBall
 */

function EightBall( {answers = defaultAnswers} ) {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question.",
    color: "black",
  });

  function handleClick(evt) {
    setAnswer(_.sample(answers));
  }

  return (
    <div
        className="EightBall"
        onClick={handleClick}
        style={{backgroundColor: answer.color}}>
      <b className="EightBall-answer">{answer.msg}</b>
    </div>
  )
}

export default EightBall

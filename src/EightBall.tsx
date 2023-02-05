import { defaultAnswers } from "./answers";
import _ from "underscore";
import { useState } from "react";
import "./EightBall.css";

interface AnswersInterface {
  msg: string;
  color: string;
}

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

const EightBall: React.FC = () =>{;
  const [answer, setAnswer] = useState<AnswersInterface>({
    msg: "Think of a Question.",
    color: "black",
  });

  function handleClick(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setAnswer(_.sample(defaultAnswers) as AnswersInterface);
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}
    >
      <b className="EightBall-answer">{answer.msg}</b>
    </div>
  );
}

export default EightBall;

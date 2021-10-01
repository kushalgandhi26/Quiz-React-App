import React, { useContext, useState } from 'react'
import QuizContext from '../context/QuizContext';

function Question(props) {
      const { heading, options,position } = props;
      const context = useContext(QuizContext);
      const { score, setScore } = context;
      // const [answer, setAnswer] = useState("green")
      const [status, setStatus] = useState(false);
      const handleClick = (correct) => {
            if (correct) {
                  setScore(score + 1);
            }
      }
      return (
            <>
                  <div className="d-flex flex-column bd-highlight mb-3 my-3">
                        <h3 style={{textAlign:'center'}}>Q: {position+1} {heading}</h3>
                        {options.map((option) => (
                              <button key={option.id} type="button" className="btn btn-outline-primary my-2" style={{ borderRadius: '20px'}}
                                    onClick={(e) => {
                                          if (option.isCorrect) {
                                                e.target.style.backgroundColor = "green"
                                                e.target.style.color = "white"
                                          } else {
                                                e.target.style.backgroundColor = "red"
                                                e.target.style.color = "white"
                                          }
                                          setStatus(true);
                                          handleClick(option.isCorrect)
                                    }} disabled={status}>{option.answerText}</button>
                        ))}
                  </div>
            </>
      )
}

export default Question

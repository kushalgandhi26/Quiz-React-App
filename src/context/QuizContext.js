import React,{ createContext, useState } from 'react'

const QuizContext = createContext();

function QuizContextProvider(props) {
      const [score, setScore] = useState(0);
      const [position, setPosition] = useState(0);
      return (
            <QuizContext.Provider value={{score,setScore,position,setPosition}}>
                  {props.children}
            </QuizContext.Provider>
      )
}

export default QuizContext
export {QuizContextProvider}

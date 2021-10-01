import React, { createContext, useState, useRef,useEffect } from 'react'

const TimerContext = createContext();

function TimerContextProvider(props) {
      const intervelRef = useRef(null);
      const [timer, setTimer] = useState('00:00:00');
      const [finish, setFinish] = useState(false);
      function getTimeRemainig(endTime) {
            const total = Date.parse(endTime) - Date.parse(new Date());
            const second = Math.floor((total / 1000) % 60);
            const minute = Math.floor((total / 1000 / 60) % 60);
            const hours = Math.floor((total / 1000 * 60 * 60) % 24);
            return {
                  total, hours, minute, second
            };
      }
      function startTimer(deadline) {
            let { total, hours, minute, second } = getTimeRemainig(deadline);
            if (total >= 0) {
                  setTimer(
                        (hours > 9 ? hours : '0' + hours) + ":" +
                        (minute > 9 ? minute : '0' + minute) + ":" +
                        (second > 9 ? second : '0' + second)
                  )
                  
            } else {
                  clearInterval(intervelRef.current);
                  setFinish(true);
            }
      }

      function clearTimer(endTime) {
            setTimer('00:01:00');
            if (intervelRef.current)
                  clearInterval(intervelRef.current);
            const id = setInterval(() => {
                  startTimer(endTime);
            }, 1000);
            intervelRef.current = id;
      }

      function getDeadlineTime() {
            let deadline = new Date();
            deadline.setSeconds(deadline.getSeconds() + 60);
            return deadline;
      }

      useEffect(() => {    
            clearTimer(getDeadlineTime());
            return () => {
                  if (intervelRef.current)
                        clearInterval(intervelRef.current);
            }
            // eslint-disable-next-line
      }, [])

      function reset() {
            if (intervelRef.current)
                  clearInterval(intervelRef.current);
            clearTimer(getDeadlineTime());
      }
      return (
            <TimerContext.Provider value={{timer,reset,finish,setFinish,setTimer}}>
                  {props.children}
            </TimerContext.Provider>
      )
}

export default TimerContext
export { TimerContextProvider }

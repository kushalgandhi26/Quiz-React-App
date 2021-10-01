import React, { useContext, useState } from 'react'
import Question from './Question'
import _ from 'underscore';
import QuizContext from '../context/QuizContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import TimerContext from '../context/TimerContext';

const questions = [
      {
            _id: 1,
            questionText: 'What is the capital of France?',
            answerOptions: [
                  { answerText: 'New York', isCorrect: false, id: 101 },
                  { answerText: 'London', isCorrect: false, id: 102 },
                  { answerText: 'Paris', isCorrect: true, id: 103 },
                  { answerText: 'Dublin', isCorrect: false, id: 104 },
            ],
      },
      {
            _id: 2,
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                  { answerText: 'Jeff Bezos', isCorrect: false, id: 201 },
                  { answerText: 'Elon Musk', isCorrect: true, id: 202 },
                  { answerText: 'Bill Gates', isCorrect: false, id: 203 },
                  { answerText: 'Tony Stark', isCorrect: false, id: 204 },
            ],
      },
      {
            _id: 3,
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                  { answerText: 'Apple', isCorrect: true, id: 301 },
                  { answerText: 'Intel', isCorrect: false, id: 302 },
                  { answerText: 'Amazon', isCorrect: false, id: 303 },
                  { answerText: 'Microsoft', isCorrect: false, id: 304 },
            ],
      },
      {
            _id: 4,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                  { answerText: '1', isCorrect: false, id: 401 },
                  { answerText: '4', isCorrect: false, id: 402 },
                  { answerText: '6', isCorrect: false, id: 403 },
                  { answerText: '7', isCorrect: true, id: 404 },
            ],
      },
      {
            _id: 5,
            questionText: 'Which one of the following does not border the Caspian Sea?',
            answerOptions: [
                  { answerText: 'Kazakhstan', isCorrect: false, id: 501 },
                  { answerText: 'Armenia', isCorrect: true, id: 502 },
                  { answerText: 'Azerbaijan', isCorrect: false, id: 503 },
                  { answerText: 'None of these', isCorrect: false, id: 504 },
            ],
      },
      {
            _id: 6,
            questionText: 'In whose hands did the Congress come after the split in Surat?',
            answerOptions: [
                  { answerText: 'Hot team members', isCorrect: false, id: 601 },
                  { answerText: 'those of soft parties', isCorrect: true, id: 602 },
                  { answerText: 'Militants', isCorrect: false, id: 603 },
                  { answerText: 'None of these', isCorrect: false, id: 604 },
            ],
      },
      {
            _id: 7,
            questionText: "Was the establishment of an anti-British organization called 'Abhinav Bharat'?",
            answerOptions: [
                  { answerText: 'V. D. Savarkar', isCorrect: true, id: 701 },
                  { answerText: 'C.R. Slave', isCorrect: false, id: 702 },
                  { answerText: 'Sardar Bhagat Singh', isCorrect: false, id: 703 },
                  { answerText: 'R. G. Bhandakar', isCorrect: false, id: 704 },
            ],
      },
      {
            _id: 8,
            questionText: 'Which of these is not a peripheral, in computer terms?',
            answerOptions: [
                  { answerText: 'Keyboard', isCorrect: false, id: 801 },
                  { answerText: 'Motherboard', isCorrect: true, id: 802 },
                  { answerText: 'Mouse', isCorrect: false, id: 803 },
                  { answerText: 'Monitor', isCorrect: false, id: 804 },
            ],
      },
      {
            _id: 9,
            questionText: 'Which of the following is not one of the early “protocols,” or ways to use the Internet?',
            answerOptions: [
                  { answerText: 'Blogging', isCorrect: true, id: 901 },
                  { answerText: 'Telnet', isCorrect: false, id: 902 },
                  { answerText: 'Gopher', isCorrect: false, id: 903 },
                  { answerText: 'FTP', isCorrect: false, id: 904 },
            ],
      },
      {
            _id: 10,
            questionText: 'What does the Internet prefix WWW stand for?',
            answerOptions: [
                  { answerText: 'Wide Width Wickets', isCorrect: false, id: 1001 },
                  { answerText: 'World Wide Web', isCorrect: true, id: 1002 },
                  { answerText: 'Worldwide Weather', isCorrect: false, id: 1003 },
                  { answerText: 'Western Washington World', isCorrect: false, id: 1004 },
            ],
      },
];

var b = _.shuffle(questions).slice(0, 5);

function Quiz() {
      const context = useContext(QuizContext);
      const timerContext = useContext(TimerContext);
      const { score,position,setPosition } = context;
      const {timer,reset,finish,setFinish} = timerContext;
      const [flag, setFlag] = useState(true);
      let history = useHistory();
      var result = "";
      var link = "";
      var pass = false;
      const handleClick = () => {
            reset();
            if (position < b.length-1) {
                  setPosition(position + 1);
            }
      }
      if(finish === true){
            if (position < b.length-1) {
                  setPosition(position + 1);
                  reset();
            }
            if(position === b.length-1 && flag){
                  document.getElementById("submit").click();
            }
            setFinish(false);
      }
      if ((score / 5) * 100 === 100) {
            result = "Well Done !!!";
            link = "Click on for getting best offer from UpCloud digital healthcare";
            pass = true;
      }
      else if ((score / 5) * 100 >= 60 && (score / 5) * 100 <= 80) {
            result = "Very Good !!!";
            link = "Click on for getting best offer from UpCloud digital healthcare";
            pass = true;
      } else if ((score / 5) * 100 < 60) {
            result = "Sorry you are not eligible to get best offer, please try again !!!";
      }
      return (
            <>
                  <div className="container">
                        <h6 className="my-3" style={{textAlign: 'end'}}>Time Remaining: {flag && timer}</h6>
                        <Question key={b[position]._id} heading={b[position].questionText} options={b[position].answerOptions} position={position}/>
                        {position !== b.length - 1 && <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                              <button className="btn btn-primary" type="button" style={{width: '13%'}} onClick={() => {handleClick()}}>Next</button>
                        </div>}

                        {position === b.length - 1 && <div className="d-grid gap-2 col-6 mx-auto">
                              <button id="submit" className="btn btn-primary my-4" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>{setFlag(false)}}>Submit</button>
                        </div>}
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                          <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Result: {score}/5</h5>
                                          </div>
                                          <div className="modal-body">
                                                {result}
                                                <br />
                                                <Link to="/">{link}</Link>
                                          </div>
                                          {!pass && <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" onClick={() => { history.go(0) }}>Reattemt quiz</button>
                                          </div>}
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Quiz

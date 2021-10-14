import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import TimerContext from '../context/TimerContext';
import QuizContext from '../context/QuizContext';

function Login() {
      const context = useContext(TimerContext);
      const quizContext = useContext(QuizContext);
      const {reset} = context;
      const {setPosition} = quizContext;
      let history = useHistory();
      const [name, setName] = useState("");
      const handleSubmit = () => {
            reset();
            setPosition(0);
            history.push("/quiz");
      }
      return (
            <div className="container">           
                  <div className="row justify-content-center align-items-center" style={{height:'80vh'}}>
                        <div className="container" style={{width: '50%'}}>
                        <h2 className="my-2">Quiz</h2>
                              <div className="card">
                                    <div className="card-body">
                                          <form onSubmit={handleSubmit}>
                                          <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Name</label>
                                                <div className="form-group">
                                                      <input className="form-control"
                                                            id="exampleFormControlInput1"
                                                            onChange={(e) => { setName(e.target.value) }}
                                                            value={name}
                                                            required />
                                                </div>
                                                <button type="submit" className="btn btn-primary my-3" >Enter Quiz</button>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Login

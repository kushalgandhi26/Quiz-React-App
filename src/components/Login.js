import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import TimerContext from '../context/TimerContext';

function Login() {
      const context = useContext(TimerContext);
      const {reset} = context;
      let history = useHistory();
      const [name, setName] = useState("");
      const handleSubmit = () => {
            reset();
            history.push("/quiz");
      }
      return (
            <div className="container">           
                  <div class="row justify-content-center align-items-center" style={{height:'80vh'}}>
                        <div class="container">
                        <h2 className="my-2">Quiz</h2>
                              <div class="card">
                                    <div class="card-body">
                                          <form onSubmit={handleSubmit}>
                                          <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Name</label>
                                                <div class="form-group">
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

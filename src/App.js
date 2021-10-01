import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Quiz from './components/Quiz';
import { QuizContextProvider } from './context/QuizContext';
import { TimerContextProvider } from './context/TimerContext';

function App() {
  return (
    <QuizContextProvider>
      <TimerContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/quiz">
              <Quiz />
            </Route>
          </Switch>
        </Router>
      </TimerContextProvider>
    </QuizContextProvider>
  );
}

export default App;

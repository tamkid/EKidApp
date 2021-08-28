import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/notFound';
import HomeFeature from './features/home';
import TodoFeature from './features/todo';
import VobFeature from './features/vob';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vobs">Vocabulary</Link>
          </li>
          <li>
            <Link to="/todos">Todo</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={HomeFeature} exact />
        <Route path="/vobs" component={VobFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

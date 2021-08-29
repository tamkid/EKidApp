import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import MainApp from './app/mainApp';
import NotFound from './components/notFound';
import HomeFeature from './features/home';
import TodoFeature from './features/todo';
import VobFeature from './features/vob';

function App() {
  return <MainApp />;
}

export default App;

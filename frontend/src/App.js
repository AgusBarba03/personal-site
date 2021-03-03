import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home'
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutme" component={AboutMe}/>
      </Switch>
    </Router>
  );
}

export default App;

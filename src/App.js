import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/layout/Layout'
import Homes from './pages/Homes'
import Landing from './pages/Landing'
import Detail from './pages/Detail'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/homes">
            <Homes/>
          </Route>
          <Route path="/home/:id">
            <Detail/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Landing/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

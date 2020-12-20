import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/layout/Layout'
import Homes from './pages/Homes'
import Landing from './pages/Landing'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Register from './pages/Register'
import Favorites from './pages/Favorites'
import Messages from './pages/Messages'
import ScrollToTop from './services/ScrollToTop'
function App() {
  return (
    <Router>
        <Layout>
          <ScrollToTop>
          <Switch>
            <Route path="/homes">
              <Homes/>
            </Route>
            <Route path="/home/:id">
              <Detail/>
            </Route>
            <Route path="/favorites">
              <Favorites/>
            </Route>
            <Route path="/messages/:start">
              <Messages/>
            </Route>
            <Route path="/messages">
              <Messages/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/">
              <Landing/>
            </Route>
          </Switch>
          </ScrollToTop>
        </Layout>
      
    </Router>
  );
}

export default App;

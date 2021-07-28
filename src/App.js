import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Details from './Details';
import Explore from "./Explore";
import Home from "./Home";
import Search from './Search';
import About from './About';


function App() {
  return (
    <div>
          <Router>
            <div>
              {/* <Nav/> */}
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/explore">
                  <Explore/>
                </Route>
                <Route exact path="/search">
                  <Search/>
                </Route>
                <Route exact path="/details/">
                  <Details/>
                </Route>
                <Route exact path="/details/:id">
                  <Details/>
                </Route>
                <Route exact path="/search/:type">
                  <Search/>
                </Route>
                <Route exact path="/search/:type/:id">
                  <Search/>
                </Route>
                <Route exact path="/about">
                  <About/>
                </Route>
              </Switch>
            </div>
          </Router> 
    </div>
  );
}

export default App;

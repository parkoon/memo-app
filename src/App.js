import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

// Components
import { LabelBox } from "./components/label";
import { MemoBox, Memo } from "./components/memo";

function App() {
  return (
    <div className="App">
      <LabelBox />
      <MemoBox />
      <Memo />
      {/* <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/memo">Memo</Link>
            </li>
          </ul>

          <hr />

    
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/memo">
              <Dashboard />
            </Route>
          
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  let { label, memo } = useParams();

  console.log(path);
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>메모1</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>메모2</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>메모3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
      {/* {JSON.stringify(path)}
      {JSON.stringify(url)}
      {JSON.stringify(label)}
      {JSON.stringify(memo)} */}
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

export default App;

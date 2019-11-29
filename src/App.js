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
import MemoForm from "./components/memo/MemoForm";

function App() {
  let { path, url } = useRouteMatch();
  let { label, memo } = useParams();
  return (
    <div className="App">
      <Router>
        <LabelBox />

        <Switch>
          <Route path={`/label/:labelId`}>
            <MemoBox />
          </Route>
        </Switch>
        <Switch>
          <Route path={`/label/:labelId/memo/:memoId`}>
            <Memo />
          </Route>
          <Route path={`/label/:labelId/memo/`}>
            <MemoForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import List from "./components/list/List";
import NotFound from "./components/notFound/NotFound";
import Detail from "./components/Detail/Detail";
import "./index.css";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Header />

        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/currency/:id" component={Detail} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

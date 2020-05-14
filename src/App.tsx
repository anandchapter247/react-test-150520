import React from "react";
import { Router, Switch, Route } from "react-router";
import { History, createBrowserHistory } from "history";
// import route containers lazily
const HomeContainer = React.lazy(() => import("./Containers/Home"));
// create history
const history: History = createBrowserHistory();

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router history={history}>
        <React.Suspense fallback={"Loading.."}>
          <Switch>
            <Route path='/' component={HomeContainer} />
          </Switch>
        </React.Suspense>
      </Router>
    </>
  );
};

export default App;

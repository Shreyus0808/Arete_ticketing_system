import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import dashboard from "./pages/dashboard.js";
import Sidebar from "./components/sidebar.js";
import Overview from "./pages/overview.js";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  document.body.style = "background: #ffffffff";
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={dashboard} />
            <Route path="/overview" exact component={Overview} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

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
import tickets from "./pages/tickets.js";
import notifications from "./pages/notifications.js";
import analysis from "./pages/analysis.js";
import Login from "./pages/login.js";

function App() {
  document.body.style = "background: #ffffffff";
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div className="flex ">
        {window.location.pathname !== "/sign-up" &&
          window.location.pathname !== "/login" && <Sidebar />}
        <div className="w-full">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={dashboard} />
            <Route path="/tickets" exact component={tickets} />
            <Route path="/notifications" exact component={notifications} />
            <Route path="/analysis" exact component={analysis} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

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


function App() {
  document.body.style = "background: #ffffffff";
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <Switch>
            <Route path="/" exact component={dashboard} />
            <Route path="/tickets" exact component={tickets} />
            <Route path="/notifications" exact component={notifications} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/Routes";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./hooks/useAuthListener";


function App() {
  let { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          exact path={ROUTES.SIGN_IN}>
              <SignIn/>
        </IsUserRedirect>
        <IsUserRedirect
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          exact path={ROUTES.SIGN_UP}>
                <SignUp />
        </IsUserRedirect>
          
        <IsUserRedirect 
          exact path={ROUTES.HOME} 
          user={user} 
          loggedInPath={ROUTES.BROWSE}  >
               <Home />
        </IsUserRedirect>
        <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
              <Browse />
        </ProtectedRoute>
       
        <Route>
          {/* NEED TO CHANGE LATER ON... */}
          <h1 style={{ color: "white" }}>Path Doesn't Exist.</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

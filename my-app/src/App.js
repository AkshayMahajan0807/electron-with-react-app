import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Home from "./Home/Home.jsx";
import ChatRoom from "./ChatRoom/ChatRoom.jsx";
import {
  AppContextProvider,
} from "./Context/appContext.js";
function App() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:roomId" component={ChatRoom} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;

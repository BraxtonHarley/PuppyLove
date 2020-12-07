import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import SwipeButtons from "./SwipeButtons";
import Chats from './Chats';
import ChatScreen from './ChatScreen'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/chat/:person">
          <Header backButton="/chat"/>
            <ChatScreen />
          </Route>
        <Switch>
          <Route path="/chat">
          <Header backButton="/"/>
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <Cards />
            <SwipeButtons />
            {/* <NewScreen /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

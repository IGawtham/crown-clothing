import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

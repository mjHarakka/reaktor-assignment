import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import JacketList from "./products/JacketList";
import JacketShow from "./products/JacketShow";
import ShirtList from "./products/ShirtList";
import ShirtShow from "./products/ShirtShow";
import AccessoriesList from "./products/AccessoriesList";
import AccessoriesShow from "./products/AccessoriesShow";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/products/jackets" exact component={JacketList} />
          <Route path="/products/jackets/:id" exact component={JacketShow} />
          <Route path="/products/shirts" exact component={ShirtList} />
          <Route path="/products/shirts/:id" exact component={ShirtShow} />
          <Route path="/products/accessories" exact component={AccessoriesList} />
          <Route path="/products/accessories/:id" exact component={AccessoriesShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CocktailsPage from "./components/pages/CocktailsPage";
import SingleCocktailPage from "./components/pages/SingleCocktailPage";
import RecommendPage from "./components/pages/RecommendPage";
import NotFoundPage from "./components/pages/NotFoundPage";

const App = () => {
  return (
    <div className="com">
      <Header />
      <div className="content-box">
        <div className="content">
          <Switch>
            <Route path="/Cocktail-market-app" component={RecommendPage} />
            <Route path="/cocktails" component={CocktailsPage} />
            <Route path="/cocktail/:id" component={SingleCocktailPage} />
            <Route path="/not-found" component={NotFoundPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

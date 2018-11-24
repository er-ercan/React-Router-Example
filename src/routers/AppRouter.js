import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PortfolioPage from "../components/Portfolio";
import HomePage from "./../components/HomePage";
import ContactPage from "./../components/Contact";
import Header from "./../components/Header";
import NotFoundPage from "./../components/NotFound";
import PortfolioPageItem from "./../components/PortfolioPageItem";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        {/*exact default true */}
        <Route exact={true} path="/portfolio" component={PortfolioPage} />
        <Route path="/portfolio/:id" component={PortfolioPageItem} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

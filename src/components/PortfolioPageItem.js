import React from "react";

const PortfolioPageItem = props => (
  <div>
    <h1>Portfolio Item</h1>
    <p>My Portfolio Item Page of {props.match.params.id}</p>
  </div>
);

export default PortfolioPageItem;

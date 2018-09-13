import React, { Component } from "react";

export default props => {
  return (
    <div>
      <ul>
        {props.products
          .filter(product => (props.showInStock ? product.inStock : true))
          .filter(
            product =>
              props.nameFilter
                ? product.name.startsWith(props.nameFilter)
                : true
          )
          .map(product => {
            return <li>{product.name}</li>;
          })}
      </ul>
    </div>
  );
};

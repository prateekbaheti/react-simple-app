import React, { Component } from "react";

export default props => {
  return (
    <div>
      <ul>
        {props.products.map(element => {
          return <li>{element.name}</li>;
        })}
      </ul>
    </div>
  );
};

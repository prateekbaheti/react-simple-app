import React, { Component } from "react";

let products = [
  { name: "Iphone", inStock: true },
  { name: "Echo spot", inStock: true },
  { name: "Fitbit charge", inStock: true },
  { name: "Macbook", inStock: false }
];
export default () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(element => {
          return (
            <li>
              <span>{element.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

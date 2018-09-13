import React, { Component } from "react";
import List from "./list";
import Filter from "./filter";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: "Iphone", inStock: true },
        { name: "Echo spot", inStock: true },
        { name: "Fitbit charge", inStock: true },
        { name: "Macbook", inStock: false }
      ],
      showInStock: false
    };
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <Filter showInStock={this.state.showInStock} />
        <List products={this.state.products} />
      </div>
    );
  }
}

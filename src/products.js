import React, { Component } from "react";
import List from "./list";
import Filter from "./filter";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.toggleInStock = this.toggleInStock.bind(this);
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

  toggleInStock() {
    this.setState({ showInStock: !this.state.showInStock });
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <Filter
          showInStock={this.state.showInStock}
          onChange={this.toggleInStock}
        />
        <List products={this.state.products} />
      </div>
    );
  }
}

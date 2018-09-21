import React, { Component } from "react";
import List from "./list";
import Filter from "./filter";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.toggleInStock = this.toggleInStock.bind(this);
    this.nameFilterChange = this.nameFilterChange.bind(this);
    this.state = {
      products: [
        { name: "Iphone", inStock: true },
        { name: "Echo spot", inStock: true },
        { name: "Fitbit charge", inStock: true },
        { name: "Macbook", inStock: false },
        { name: "Firestick", inStock: false }
      ],
      showInStock: false,
      nameFilter: ""
    };
  }

  toggleInStock() {
    this.setState({
      showInStock: !this.state.showInStock
    });
  }

  nameFilterChange(text) {
    this.setState({ nameFilter: text.trim() });
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <Filter
          showInStock={this.state.showInStock}
          toggleInStock={this.toggleInStock}
          nameFilterChange={this.nameFilterChange}
        />
        <List
          products={this.state.products}
          nameFilter={this.state.nameFilter}
          showInStock={this.state.showInStock}
        />
      </div>
    );
  }
}

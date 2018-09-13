import React, { Component } from "react";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label>
          <input
            type="text"
            onChange={event => {
              this.props.nameFilterChange(event.target.value);
            }}
          />
          Filter
        </label>
        <label>
          <input
            type="checkbox"
            onChange={this.props.toggleInStock}
            checked={this.props.showInStock}
          />
          Show only in stock items
        </label>
      </div>
    );
  }
}

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
            type="checkbox"
            onClick={this.props.onChange}
            checked={this.props.showInStock}
          />
          Show only in stock items
        </label>
      </div>
    );
  }
}

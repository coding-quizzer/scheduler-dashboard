import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { id, label, value, onSelect } = this.props;

    return (
      <section
        className="dashboard_panel"
        onClick={event => onSelect(id)}
      >
        <h1 className="dashboard__panel">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;
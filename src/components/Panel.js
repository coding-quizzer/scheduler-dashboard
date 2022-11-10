import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { label, value } = this.props;

    return (
      <section
        className="dashboard_panel"
      >
        <h1 className="dashboard__panel">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;
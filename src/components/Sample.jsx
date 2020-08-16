import React, { Component } from "react";
import monday from "../libs/monday";

class Sample extends Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      context: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
    monday.listen("settings", res => {
      this.setState({ settings: res.data });
    });

    monday.api(`query { me { name } }`).then(res => {
      this.setState({ name: res.data.me.name });
    });
  }

  render() {
    return (
      <div className="App" style={{ background: this.state.settings.background }}>
        Hello, {this.state.name}!
      </div>
    );
  }
}

export default Sample;

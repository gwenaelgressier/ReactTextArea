import React, { Component } from "react";

export default class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: [],
    };
    this.notesHandleChange = this.notesHandleChange.bind(this);
    this.notesHandleSubmit = this.notesHandleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  notesHandleChange(event) {
    this.setState({ value: event.target.value });
  }

  notesHandleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      items: [...this.state.items, this.state.value],
      value: this.state.value,
    });
    //console.log(this.state.value);
  };

  handleClear(e) {
    e.preventDefault();
    this.setState({
      value: "",
    });
  }

  render() {
    return (
      <div className="textarea">
        <textarea
          placeholder={"Write your notes here."}
          value={this.state.value}
          onChange={this.notesHandleChange}
          onFocus={this.handleClear}
          cols={40}
          rows={8}
        />
        <br />
        <button onClick={this.notesHandleSubmit}>Save</button>
        <ul>
          {this.state.items.map((note) => {
            return <li key={Math.floor(Math.random() + 1000) + 1}>{note}</li>;
          })}
        </ul>
      </div>
    );
  }
}

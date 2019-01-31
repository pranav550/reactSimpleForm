import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      regDet: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.fnClick = this.fnClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      regDet: {
        ...this.state.regDet,
        [e.target.name]:
          e.target.type == "checkbox" ? e.target.checked : e.target.value
      }
    });
  }

  fnClick() {
    console.log(this.state.regDet);
  }
  render() {
    return (
      <div className="App">
        <h2>Contact Form</h2>
        <div>
          Username:
          <input type="text" name="username" onChange={this.handleChange} />
        </div>
        <div>
          Password:
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
        <div>
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          Female
        </div>

        <div>
          Address:
          <textarea
            name="address"
            cols="30"
            rows="10"
            onChange={this.handleChange}
          />
        </div>

        <div>
          Hobbies:
          <input
            type="checkbox"
            name="isCricket"
            onChange={this.handleChange}
          />
          Cricket
          <input
            type="checkbox"
            name="isFootball"
            onChange={this.handleChange}
          />
          Football
        </div>
        <div>
          Countries:
          <select name="country" onChange={this.handleChange}>
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="america">America</option>
          </select>
        </div>

        <div>
          File:
          <input type="file" name="image" onChange={this.handleChange} />
        </div>

        <div>
          <input type="button" value="send" onClick={this.fnClick} />
        </div>
      </div>
    );
  }
}

export default App;

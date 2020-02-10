import React, { Component } from "react";

export class Calculator extends Component {
  state = {
    input1: "",
    input2: "",
    input3: "",
    value1: "",
    value2: "",
    value3: "",
    result: 0
  };

  handleChangeValue = e => {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleCheckBox1 = () => {
    const { input1 } = this.state;
    this.setState({
      value1: input1
    });
  };

  handleCheckBox2 = () => {
    const { input2 } = this.state;
    this.setState({
      value2: input2
    });
  };

  handleCheckBox3 = () => {
    const { input3 } = this.state;
    this.setState({
      value3: input3
    });
  };

  handlePlus = () => {
    const { value1, value2, value3 } = this.state;
    if (value1 || value2 || value3) {
      if (value1 && value2 && value3) {
        let result =
          parseFloat(value1) + parseFloat(value2) + parseFloat(value3);
        this.setState({
          result: result
        });
      } else if (value2 && value3) {
        let result = parseFloat(value2) + parseFloat(value3);
        this.setState({
          result: result
        });
      } else if (value1 && value2) {
        let result = parseFloat(value1) + parseFloat(value2);
        this.setState({
          result: result
        });
      } else if (value1 && value3) {
        let result = parseFloat(value1) + parseFloat(value3);
        this.setState({
          result: result
        });
      } else {
        alert("Please input a number");
      }
    } else {
      alert("Please input a number");
    }
  };

  handleMinus = () => {
    const { value1, value2, value3 } = this.state;
    if (value1 || value2 || value3) {
      if (value1 && value2 && value3) {
        let result =
          parseFloat(value1) - parseFloat(value2) - parseFloat(value3);
        this.setState({
          result: result
        });
      } else if (value2 && value3) {
        let result = parseFloat(value2) - parseFloat(value3);
        this.setState({
          result: result
        });
      } else if (value1 && value2) {
        let result = parseFloat(value1) - parseFloat(value2);
        this.setState({
          result: result
        });
      } else if (value1 && value3) {
        let result = parseFloat(value1) - parseFloat(value3);
        this.setState({
          result: result
        });
      } else {
        alert("Please input a number");
      }
    } else {
      alert("Please input a number");
    }
  };

  handleMultiple = () => {
    const { value1, value2, value3 } = this.state;
    if (value1 || value2 || value3) {
      if (value1 && value2 && value3) {
        let result =
          parseFloat(value1) * parseFloat(value2) * parseFloat(value3);
        this.setState({
          result: result
        });
      } else if (value2 && value3) {
        let result = parseFloat(value2) * parseFloat(value3);
        this.setState({
          result: result
        });
      } else if (value1 && value2) {
        let result = parseFloat(value1) * parseFloat(value2);
        this.setState({
          result: result
        });
      } else if (value1 && value3) {
        let result = parseFloat(value1) * parseFloat(value3);
        this.setState({
          result: result
        });
      } else {
        alert("Please input a number");
      }
    } else {
      alert("Please input a number");
    }
  };

  handleDiv = () => {
    const { value1, value2, value3 } = this.state;
    if (value1 || value2 || value3) {
      if (value1 && value2 && value3) {
        let result =
          parseFloat(value1) / parseFloat(value2) / parseFloat(value3);
        this.setState({
          result: result
        });
      } else if (value2 && value3) {
        let result = parseFloat(value2) / parseFloat(value3);
        this.setState({
          result: result
        });
      } else if (value1 && value2) {
        let result = parseFloat(value1) / parseFloat(value2);
        this.setState({
          result: result
        });
      } else if (value1 && value3) {
        let result = parseFloat(value1) / parseFloat(value3);
        this.setState({
          result: result
        });
      } else {
        alert("Please input a number");
      }
    } else {
      alert("Please input a number");
    }
  };

  render() {
    return (
      <div className="container">
        <form id="form" className="form">
          <div className="title">
            <h1>Simple Calculator</h1>
          </div>
          <div className="form-control">
            <input
              className="input"
              type="number"
              id="input1"
              placeholder="Input number"
              onChange={this.handleChangeValue}
            />
            <input type="checkbox" onChange={this.handleCheckBox1} />
          </div>
          <div className="form-control">
            <input
              className="input"
              type="number"
              id="input2"
              placeholder="Input number"
              onChange={this.handleChangeValue}
            />
            <input type="checkbox" onChange={this.handleCheckBox2} />
          </div>
          <div className="form-control">
            <input
              className="input"
              type="number"
              id="input3"
              placeholder="Input number"
              onChange={this.handleChangeValue}
            />
            <input type="checkbox" onChange={this.handleCheckBox3} />
          </div>
          <div className="form-control">
            <button
              type="button"
              className="btn btn-black "
              onClick={() => this.handlePlus()}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-black "
              onClick={() => this.handleMinus()}
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-black "
              onClick={() => this.handleMultiple()}
            >
              x
            </button>
            <button
              type="button"
              className="btn btn-black "
              onClick={() => this.handleDiv()}
            >
              /
            </button>
          </div>
          <h2>
            <span>Result = </span>
            <strong>{this.state.result}</strong>
          </h2>
        </form>
      </div>
    );
  }
}

export default Calculator;

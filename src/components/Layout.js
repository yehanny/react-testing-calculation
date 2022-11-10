import React from "react";
import Paragraph from "./Paragraph";
import Calculation from "../logic/calculation";

/** @namespace React.Component */
export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      value: "",
    };

    /**
     * @TODO Implement it
     */

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    // @TODO Implement it
  }

  handleSubmit(event) {
    event.preventDefault();

    let calculation = new Calculation(this.state.value);

    let result = null;

    /* @TODO Implement it */
    try {
      result = calculation.calculate();
    } catch (error) {
      result = this.state.value;
    }

    let content = "Wrong input!";

    let formattedValue = this.state.value.replace(/(\d+\.?\d*)([+\*\/\-])(\d+\.?\d*)$/, "$1 $2 $3");

    // @TODO Implement it
    if (result !== false) {
      this.setState({ value: `${formattedValue} = ${result}` });
    } else {
      this.setState({ value: content });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <h1 className="col-md-8 col-md-offset-2 text-center">Devskiller React calculator</h1>
        </div>

        <div className="container">
          <div className="row">
            <form className="col-md-6 col-md-offset-3 text-center" onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="form-control col-md-9"
                placeholder="expression..."
                onChange={this.handleChange}
                /* @TODO Implement it */
              />
              <input className="btn btn-success" type="submit" value="Submit" />
            </form>
          </div>

          <Paragraph content={this.state.value} />
        </div>
      </div>
    );
  }
}

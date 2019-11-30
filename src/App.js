import React, { Component } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      amount: undefined,
      offsets: [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1],
      counter: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }

  /**
   * onInputHandler | is to handle when user click "Get Money" button
   */
  onInputHandler = event => {
    const value = event.target.value;

    if (!isNaN(value) && value >= 0) {
      this.setState({
        amount: value
      });
    }
  };

  /**
   * handleGetMoney | is to calculate and count particular denominations which are needed
   */
  handleGetMoney = () => {
    const { offsets } = this.state;
    let amount = this.state.amount || 0;
    let counter = [0];

    for (let i = 0; i < offsets.length; i++) {
      if (amount >= offsets[i]) {
        counter[i] = Math.floor(amount / offsets[i]);
        amount = amount - counter[i] * offsets[i];
      }
    }

    this.setState({
      counter
    });
  };

  /**
   * onEnter | is to handle submit on enter in input box
   */
  onEnter = event => {
    if (event.which === 13) {
      this.handleGetMoney();
    }
  };

  /**
   * renderHeader | is to render header part of the app
   */
  renderHeader = name => {
    return (
      <div className="header">
        <h1>{name}</h1>
      </div>
    );
  };

  render() {
    const { amount, counter } = this.state;

    return (
      <div>
        {this.renderHeader("ATM Money Dispenser")}
        <div className="main">
          <LeftPanel
            value={amount}
            inputHandler={this.onInputHandler}
            getMoney={this.handleGetMoney}
            onEnter={this.onEnter}
          />
          <div className="right-panel">
            <RightPanel counter={counter} />
          </div>
        </div>
      </div>
    );
  }
}

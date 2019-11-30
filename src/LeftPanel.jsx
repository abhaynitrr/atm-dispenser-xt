import React from "react";

export default function LeftPanel(props) {
  let { value, inputHandler, getMoney, onEnter } = props;

  return (
    <div className="left-panel">
      <h2 className="left-head">Welcome to ATM</h2>
      <div className='front-box'>
        <label>Enter the amount</label>
        <div className="inputBox">
          <input type="number" value={value} onChange={inputHandler} onKeyPress={onEnter} />
        </div>
      </div>
      <span onClick={getMoney} className="get-money-btn">
        Get Money
      </span>
    </div>
  );
}

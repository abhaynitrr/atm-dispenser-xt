import React from "react";

export default function RightPanel(props) {
  let { counter } = props;

  return (
    <table className="right-tbl">
      <thead>
        <h4 className="right-head">Your will get the following amount</h4>
      </thead>
      <tbody>
        <tr>
          <td>{counter[9] || 0} notes of Rs 1</td>
          <td>{counter[8] || 0} notes of Rs 2</td>
        </tr>
        <tr>
          <td>{counter[7] || 0} notes of Rs 5</td>
          <td>{counter[6] || 0} notes of Rs 10</td>
        </tr>
        <tr>
          <td>{counter[5] || 0} notes of Rs 20</td>
          <td>{counter[4] || 0} notes of Rs 50</td>
        </tr>
        <tr>
          <td>{counter[3] || 0} notes of Rs 100</td>
          <td>{counter[2] || 0} notes of Rs 200</td>
        </tr>
        <tr>
          <td>{counter[1] || 0} notes of Rs 500</td>
          <td>{counter[0] || 0} notes of Rs 2000</td>
        </tr>
      </tbody>
      <tfoot>
        Total notes dispensed: {counter.reduce((acc, val) => acc + val)}
      </tfoot>
    </table>
  );
}

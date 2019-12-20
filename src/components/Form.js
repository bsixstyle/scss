import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Form() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Form</h3>
      <hr />
      <div className="row">
        <div className="c c6">
          <div className="input">
            <label htmlFor="invalid">Label</label>
            <input type="text" placeholder="text" id="invalid" required />
            <span className="danger">This field is required</span>
          </div>
        </div>
        <div className="c c6">
          <div className="input">
            <label>Label</label>
            <textarea placeholder="text area" />
          </div>
        </div>
      </div>
      <div className="input">
        <label>Label</label>
        <input type="text" placeholder="text" />
        <input type="text" placeholder="disabled" disabled />
        <input type="text" placeholder="read only" readOnly />
        <input type="file" placeholder="text" />
        <select>
          <option>Select 1</option>
          <option>Select 2</option>
        </select>
        <textarea placeholder="text area" />
      </div>
      <div className="input">
        <input type="checkbox" id="checkenable" />
        <label htmlFor="checkenable">enable</label>&nbsp;
        <input type="checkbox" id="checkdisabled" disabled />
        <label htmlFor="checkdisabled">disabled</label>&nbsp;
        <input type="checkbox" id="checkeddisabled" checked disabled />
        <label htmlFor="checkeddisabled">checked disabled</label>&nbsp;
      </div>
      <div className="input">
        <input type="radio" id="radio1" name="radio" />
        <label htmlFor="radio1">radio 1</label>&nbsp;
        <input type="radio" id="radio2" name="radio" />
        <label htmlFor="radio2">radio 2</label>&nbsp;
        <input type="radio" id="radio3" name="radio" disabled />
        <label htmlFor="radio3">disabled</label>&nbsp;
      </div>
      <br />
      <pre>
        <code className="lang-html">
          {`
<div className="row">
  <div className="c c6">
    <div className="input">
      <label>Label</label>
      <input type="text" placeholder="text" required />
      <span class="danger">This field is required</span>
    </div>
  </div>
  <div className="c c6">
    <div className="input">
      <label>Label</label>
      <textarea placeholder="text area" />
    </div>
  </div>
</div>
<div className="input">
  <label>Label</label>
  <input type="text" placeholder="text" />
  <input type="text" placeholder="disabled" disabled />
  <input type="text" placeholder="read only" readOnly />
  <input type="file" placeholder="text" />
  <select>
    <option>Select 1</option>
    <option>Select 2</option>
  </select>
  <textarea placeholder="text area" />
</div>
<div className="input">
  <input type="checkbox" id="checkenable" />
  <label htmlFor="checkenable">enable</label>&nbsp;
  <input type="checkbox" id="checkdisabled" disabled />
  <label htmlFor="checkdisabled">disabled</label>&nbsp;
  <input type="checkbox" id="checkeddisabled" checked disabled />
  <label htmlFor="checkeddisabled">checked disabled</label>&nbsp;
</div>
<div className="input">
  <input type="radio" id="radio1" name="radio" />
  <label htmlFor="radio1">radio 1</label>&nbsp;
  <input type="radio" id="radio2" name="radio" />
  <label htmlFor="radio2">radio 2</label>&nbsp;
  <input type="radio" id="radio3" name="radio" disabled />
  <label htmlFor="radio3">disabled</label>&nbsp;
</div>
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Form;

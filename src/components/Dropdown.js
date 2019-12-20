import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Dropdown() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Dropdown</h3>
      <hr />
      <div className="dropdown">
        <input type="checkbox" id="ddm" />
        <label htmlFor="ddm">
          Click me
        </label>
        <ul>
          <li>
            <a>Default</a>
          </li>
          <li>
            <a>Prime</a>
          </li>
        </ul>
      </div>
      <br />
      <pre>
        <code className="lang-html">
          {`
<div class="dropdown">
  <input type="checkbox" id="ddm" />
  <label for="ddm">Dropdown</label>
  <ul>
    <li><a>Default</a></li>
    <li><a>Prime</a></li>
  </ul>
</div>
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Dropdown;

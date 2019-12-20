import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Dropdown() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Collapse</h3>
      <hr/>
      <div className="collapse">
        <input type="checkbox" id="clm" />
        <label htmlFor="clm">
          Click me
        </label>
        <div className="outline">
        <p>This is collapse</p>
        </div>
      </div>
      <br />
      <pre>
        <code className="lang-html">
          {`
<div class="collapse">
  <input type="checkbox" id="clm" />
  <label for="clm">Collapse</label>
  <div class="outline"> <!--you can give style with box style-->
    <p>This is collapse</p>
  </div>
</div>
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Dropdown;

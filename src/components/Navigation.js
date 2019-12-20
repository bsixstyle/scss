import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Navigation() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Navigation</h3>
      <hr />
      <ul className="box outline c c1">
        <li><a>Menu 1</a></li>
        <li><a>Menu 2</a></li>
        <li><a>Menu 3</a></li>
      </ul>
      <br />
      <pre>
        <code className="lang-html">
          {`
<ul className="box outline c c1">
  <li><a>Menu 1</a></li>
  <li><a>Menu 2</a></li>
  <li><a>Menu 3</a></li>
</ul>
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Navigation;

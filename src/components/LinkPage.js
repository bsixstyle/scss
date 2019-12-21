import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
function LinkPage() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Footer</h3>
      <hr />
      <Link to="#" className="link">
        Im a link
      </Link>
      <pre>
        <code className="lang-html">
          {`
<a className="link">Im a link</a>
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default LinkPage;

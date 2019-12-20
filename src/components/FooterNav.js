import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function FooterNav() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Footer</h3>
      <hr />
      <p>See the footer.</p>
      <pre>
        <code className="lang-html">
          {`
<footer>
    <div className="container">
        <p>© BsixStyle 2019</p>
    </div>
</footer>
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default FooterNav;

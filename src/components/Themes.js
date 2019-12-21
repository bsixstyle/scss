import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Themes() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Themes</h3>
      <hr />
      <p>You need include themes to enable this feature</p>

      <pre>
        <code className="lang-html">
          {`
<!-- include this -->
<link href="https://bsixstyle.github.io/bsixcss/css/theme/bsix-themes.css" rel="stylesheet" />

<body class="dark">   <!-- prime / dark / empty -->
  ....
</body>
          `.trim()}
        </code>
      </pre>

      <p>

      </p>
    </Fragment>
  );
}

export default Themes;

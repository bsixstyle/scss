import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";

function Install() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Installations</h3>
      <p>
        Download&nbsp;
        <a target="_blank" data-tooltip="Hohoho" className="link" href="https://bsixstyle.github.io/bsixcss/css/bsix.css">
          css file
        </a>
        &nbsp;or here for &nbsp;
        <a target="_blank"
          className="link"
          href="https://bsixstyle.github.io/bsixcss/css/theme/bsix-themes.css"
        >
          themes
        </a> download or clone it from <a  href="https://github.com/bsixstyle/scss" className="link">the sources.</a>
        &nbsp;npm? yes later.

        next work i'll split up the components, you can takes what you need, to optimize your website.
      </p>
{/* <span class="tooltip">Testing testing</span> */}
      <br />
      <pre>
        <code className="lang-html">
          {`
<link href="https://bsixstyle.github.io/bsixcss/css/bsix.css" rel="stylesheet" />
<!--optional themes (enable prime & dark)-->
<link href="https://bsixstyle.github.io/bsixcss/css/theme/bsix-themes.css" rel="stylesheet" />
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Install;

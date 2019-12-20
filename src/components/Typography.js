import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Typography() {
  useEffect(() => {
    Prism.highlightAll();
  })
  return (
    <Fragment>
      <h3>Typography</h3>
      <hr />
      <h1>Bsix css</h1>
      <h2>Bsix css</h2>
      <h3>Bsix css</h3>
      <h4>Bsix css</h4>
      <h5>Bsix css</h5>
      <p>Hello im p in bsix css</p>
      <p>Hello im p in bsix css</p>
      <br />
      <pre>
        <code className="lang-html">
          {`
<h1>Bsix css</h1>
<h2>Bsix css</h2>
<h3>Bsix css</h3>
<h4>Bsix css</h4>
<h5>Bsix css</h5>
<p>Hello im p in bsix css</p>
<p>Hello im p in bsix css</p>
`.trim()}
        </code>
      </pre>

      <h3>Blockquote</h3>
      <hr />
      <blockquote>
        <p>Bsixstyle it's 100% css, no need javascripts.
          </p>
        <footer>Me, <cite>Brave New World</cite></footer>
      </blockquote>
      <br />
      <pre>
        <code className="lang-html">
          {`
<blockquote>
  <p>Bsixstyle it's 100% css, no need javascripts.</p>
  <footer>Me, <cite>Brave New World</cite></footer>
</blockquote>
`.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Typography;

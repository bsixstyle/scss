import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Box() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Box</h3>
      <hr />
      <div className="row">
        <div className="c">
          <div className="box prime">
            <h3>I'm prime box</h3>
            <div>
              <p>What ever here</p>
            </div>
          </div>
        </div>
        <div className="c">
          <div className="box ok">
            <h3>I'm ok box</h3>
            <div>
              <p>What ever here</p>
            </div>
          </div>
        </div>
        <div className="c">
          <div className="box danger">
            <h3>I'm danger box</h3>
            <div>
              <p>What ever here</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="box light">
        <h3>I'm light box</h3>
        <div>
          <p>What ever here</p>
        </div>
      </div>
      <br />
      <div className="box warn">
        Alert?
      </div>
      <br />
      <pre>
        <code className="lang-html">
          {`
<div class="row">
  <div class="c">
    <div class="box prime">
      <h3>I'm prime box</h3>
      <div>
        <p>What ever here</p>
      </div>
    </div>
  </div>
  <div class="c">
    <div class="box ok">
      <h3>I'm ok box</h3>
      <div>
        <p>What ever here</p>
      </div>
    </div>
  </div>
  <div class="c">
    <div class="box danger">
      <h3>I'm danger box</h3>
      <div>
        <p>What ever here</p>
      </div>
    </div>
  </div>
</div>
<br />
<div class="box light">
  <h3>I'm light box</h3>
  <div>
    <p>What ever here</p>
  </div>
</div>
<br />
<div class="box warn">
  Alert?
</div>
<br />
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Box;

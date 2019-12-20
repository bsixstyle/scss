import React, { Fragment, useState, useEffect } from "react";
import Prism from "prismjs";
function Grid() {
  const [grid, setGrid] = useState(12);
  useEffect(() => {
    Prism.highlightAll();
  });
  const renderGrid = () => {
    return (
      <Fragment>
        <div className="row">
          {Array.from(Array(6), (e, i) => {
            return (
              <Fragment key={i}>
                <div className={"c " + "c" + (i + 1)}>
                  <p className="outline"> {"c " + "c" + (i + 1)}</p>
                </div>
                <div className={"c " + "c" + (12 - (i + 1))}>
                  <p className="outline"> {"c " + "c" + (12 - (i + 1))}</p>
                </div>
              </Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <h3>Layout</h3>
      <hr />
      {renderGrid()}

      <div class="row">
        <div class="c c1">
          <p class="outline">c c1</p>
        </div>
        <div class="c c2">
          <p class="outline">c c2</p>
        </div>
        <div class="c c9">
          <p class="outline">c c9</p>
        </div>
        <div class="c c12">
          <p class="outline">c c12</p>
        </div>
      </div>
      <pre>
        <code className="lang-html">
          {`
<div class="row">
  <div class="c c1">
    <p>BsixStyle</p>
  </div>
  <div class="c c2">
    <p>BsixStyle 2019</p>
  </div>
  <div class="c c9">
    <p>BsixStyle</p>
  </div>
  <div class="c c12">
    <p>BsixStyle</p>
  </div>
</div>
          `.trim()}
        </code>
      </pre>

      <h3>This site Layout</h3>
      <div class="c c2">
        <div class="outline">c c1 absolute position</div>
      </div>
      <div class="c c10 m2">
        <div class="outline">c c2 m2</div>
      </div>
      <pre>
        <code className="lang-html">
          {`
<div class="c c2">
  <div class="outline">c c1 absolute position sidebar</div>
</div>
<div class="c c10 m2">
  <div class="outline">c c2 m2 header + contents</div>
</div>
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Grid;

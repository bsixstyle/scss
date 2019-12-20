import React, { Fragment, useEffect, useState } from "react";
import Prism from "prismjs";
function Link() {
  useEffect(() => {
    Prism.highlightAll();
  });

  const [tab, setTab] = useState("one");
  return (
    <Fragment>
      <h3>Tab</h3>
      <hr />
      <div class="tab">
        <input
          type="radio"
          name="tabs"
          id="tabone"
          value="one"
          checked={tab === "one"}
          onChange={e => (setTab(e.target.value))}
        />
        <label for="tabone">Tab 1</label>
        <div>
          <h1>Tab 1 Content</h1>
        </div>
        <input
          type="radio"
          name="tabs"
          id="tabtwo"
          value="two"
          checked={tab === "two"}
          onChange={e => (setTab(e.target.value))}
        />
        <label for="tabtwo">Tab 2</label>
        <div>
          <h1>Tab 2 Content</h1>
        </div>
        <input
          type="radio"
          name="tabs"
          id="tabthree"
          value="three"
          checked={tab === "three"}
          onChange={e => (setTab(e.target.value))}
        />
        <label for="tabthree">Tab 3</label>
        <div>
          <h1>Tab 3 Content</h1>
        </div>
      </div>
      <pre>
        <code className="lang-html">
          {`
<div class="tab">
    <input type="radio" name="tabs" id="tab1" checked="checked"/>
    <label for="tab1">Tab 1</label>
    <div>
        <h1>Tab 1 Content</h1>
    </div>
    <input type="radio" name="tabs" id="tab2" />
    <label for="tab2">Tab 2</label>
    <div>
        <h1>Tab 2 Content</h1>
    </div>
    <input type="radio" name="tabs" id="tab3" />
    <label for="tab3">Tab 3</label>
    <div>
        <h1>Tab 3 Content</h1>
    </div>
</div>
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Link;

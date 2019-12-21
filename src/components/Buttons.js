import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";
function Buttons() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Buttons</h3>
      <hr />
      <button>button</button>&nbsp;      
      <button className="active">active</button>&nbsp;
      <a className="button dark">dark</a>&nbsp;
      <input type="button" className="prime" value="prime" />&nbsp;
      <button className="danger">danger</button>&nbsp;
      <button className="warn">warn</button>&nbsp;
      <button className="ok">ok</button>&nbsp;
      <button disabled>disabled</button>&nbsp;
      <pre>
        <code className="lang-html">
          {`
<button>button</button>&nbsp;      
<button class="active">active</button>&nbsp;
<a class="button dark">dark</a>&nbsp;
<input type="button" class="prime" value="prime" />&nbsp;
<button class="danger">danger</button>&nbsp;
<button class="warn">warn</button>&nbsp;
<button class="ok">ok</button>&nbsp;
<button disabled>disabled</button>&nbsp;
<!--group? just remove space / &nbsp; -->
          `.trim()}
        </code>
      </pre>
      <hr />
      <button className="small">small button</button>&nbsp;
      <button>normal button</button>&nbsp;
      <button className="big">big button</button>
      <br/>
      <br/>
      <hr />
      <pre>
        <code className="lang-html">
          {`
<button class="small">small button</button>
<button>normal button</button>
<button class="big">big button</button>
          `.trim()}
        </code>
      </pre>
    </Fragment>
  );
}

export default Buttons;

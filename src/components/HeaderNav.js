import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
function HeaderNav() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <h3>Header Nav</h3>
      <hr />
      <p>This example is reponsive just resize your browser, why i give class for label and checkbox? in case, you wanna add another checkbox or label</p>
      
      <header>
        <div className="container">
          <a className="brand">Bsix SCSS</a>
          <label className="header" htmlFor="burger1">
            &#8801;
          </label>
          <input type="checkbox" className="header" id="burger1" />
          <ul>
            <li><a>Page 1</a></li>
            <li><a>Page 2</a></li>
            <li className="dropdown">
              <input type="checkbox" className="tm" id="dropdownex1" />
              <a>
                <label htmlFor="dropdownex1">Dropdown</label>
              </a>
              <ul>
                <li><a>Default</a></li>
                <li><a>Prime</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
      <br />
      <pre>
        <code className="lang-html">
          {`
<header>  <!--<header class="fixed">-->
  <div class="container">
    <a class="brand">Bsix SCSS</a>
    <label class="header" for="burger1">
      &#8801;
    </label>
    <input type="checkbox" class="header" id="burger1" />
    <ul>
      <li><a>Page 1</a></li>
      <li><a>Page 2</a></li>
      <li class="dropdown">
        <input type="checkbox" class="tm" id="dropdownex1" />
        <a>
          <label for="dropdownex1">Dropdown</label>
        </a>
        <ul>
          <li><a>Default</a></li>
          <li><a>Prime</a></li>
        </ul>
      </li>
    </ul>
  </div>
</header>
          `.trim()}
        </code>
      </pre>
      if you set fix the header just add class <b>fixed</b>
    </Fragment>
  );
}

export default HeaderNav;

import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <header className="fixed">
        <div className="container">
          <Link className="brand" to="/">
            Bsixstyle
          </Link>
          <label htmlFor="header" className="header">
            &#8801;
          </label>
          <input type="checkbox" className="header" id="header" />
          <ul>
            <li>
              <a
                onClick={e => {
                  document.body.classList.remove("prime");
                  document.body.classList.remove("dark");
                }}
              >
                Default
              </a>
            </li>
            <li>
              <a
                onClick={e => {
                  document.body.classList.add("prime");
                  document.body.classList.remove("dark");
                }}
              >
                Prime
              </a>
            </li>
            <li>
              <a
                onClick={e => {
                  document.body.classList.remove("prime");
                  document.body.classList.add("dark");
                }}
              >
                Dark
              </a>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;

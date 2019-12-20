import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Aside() {
  const [showMenu, setShowMenu] = useState(false);
  const [showComponents, setShowComponents] = useState(true);
  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <Fragment>
      <input
        className="sidebar"
        type="checkbox"
        id="sidebar"
        checked={showMenu}
        onChange={elem => setShowMenu(elem.target.checked)}
      />
      <label className="sidebar" htmlFor="sidebar">
        &#8801;
      </label>
      <aside className="c2">
        <div className="container">
          <h3>BSIX MENU</h3>
          <hr />
          <Link onClick={hideMenu} to="/install">
            Installation
          </Link>
          <Link onClick={hideMenu} to="/grid">
            Layout
          </Link>

          <div className="collapse">
            <label htmlFor="collapse">Components</label>
            <input
              type="checkbox"
              id="collapse"
              checked={showComponents}
              onChange={elem => setShowComponents(elem.target.checked)}
            />
            <div>
              <Link onClick={hideMenu} to="/box">
                Box
              </Link>

              <Link onClick={hideMenu} to="/buttons">
                Buttons
              </Link>

              <Link onClick={hideMenu} to="/collapse">
                Collapse
              </Link>

              <Link onClick={hideMenu} to="/dropdown">
                Dropdown
              </Link>

              <Link onClick={hideMenu} to="/form">
                Form
              </Link>

              <Link onClick={hideMenu} to="/footer">
                Footer
              </Link>

              <Link onClick={hideMenu} to="/linkpage">
                Link
              </Link>

              <Link onClick={hideMenu} to="/modal">
                Modal
              </Link>

              <Link onClick={hideMenu} to="/headernav">
                Navbar
              </Link>

              <Link onClick={hideMenu} to="/navigation">
                Navigation
              </Link>

              <Link onClick={hideMenu} to="/sidebar">
                Sidebar
              </Link>

              <Link onClick={hideMenu} to="/table">
                Table
              </Link>

              <Link onClick={hideMenu} to="/tab">
                Tab
              </Link>

              <Link onClick={hideMenu} to="/typography">
                Typography
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </Fragment>
  );
}

export default Aside;

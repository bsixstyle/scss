import React, { Fragment } from "react";
function Sidebar() {
  return (
    <Fragment>
      <h3>Sidebar</h3>
      <hr />
      <p>
        Same as header, i added class, in case you wanna add another label or
        checkbox, note : the other label or checkbox dont add .sidebar class,
        sample from codesandbox, may be its take a while to render if your
        connection is very slow like me XD
      </p>
      <iframe
        src="https://codesandbox.io/embed/bsix-sidebar-menu-uo7zq?fontsize=14&hidenavigation=1&theme=dark"
        style={_style}
        title="bsix sidebar menu"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </Fragment>
  );
}

const _style = {
  width: "100%",
  height: "500px",
  border: "0",
  borderRadius: "4px",
  overflow: "hidden"
};

export default Sidebar;

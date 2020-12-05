import React from "react";

const Navbar = props => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {" "}
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

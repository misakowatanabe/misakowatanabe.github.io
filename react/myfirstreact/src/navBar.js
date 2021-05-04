import React from "react";


export const NavBar = (props) => {
  return (
    <header className="nav">
      <nav>
        {props.children}
      </nav>
    </header>
  );
};
// export default NavBar;

import React from "react";
import NavBar from "./Nav";

function Layout({ children }) {
  return (
    <div className="wrapper">
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;

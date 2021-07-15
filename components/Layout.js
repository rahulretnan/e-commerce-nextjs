import React from "react";
import Modal from "./Modal";
import NavBar from "./NavBar";
import Notify from "./Notify";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <Notify />
        <Modal />
        {children}
      </div>
    </>
  );
}

export default Layout;

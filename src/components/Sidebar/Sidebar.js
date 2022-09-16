import React from "react";
import Header from "../Shared/Header/Header.js";
import "./sidebar.css";
const Sidebar = ({ component, setClickedComponent }) => {
  const sidebarContains = [
    "Books",
    "Add_Books",
    "Orders",
    "Questions",
    "Add_Questions",
    "AddModelTestQs",
  ];
  return (
    <div>
      <Header />
      <div class="d-flex" id="wrapper">
        <div class="border-end bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading border-bottom bg-light">Admin Panel</div>
          <div class="list-group list-group-flush">
            {sidebarContains.map((comp) => (
              <a
                onClick={() => setClickedComponent(comp)}
                class="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                {comp}
              </a>
            ))}
          </div>
        </div>
        <div id="page-content-wrapper">
          <div class="mt-3 container-fluid">{component}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

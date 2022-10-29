import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./SideNavBar.scss";

const green = "#2b9d3c";
const white = "#fff";

const SideNavBar = () => {
  return (
    <div className="div-navbar">
      <CDBSidebar backgroundColor={green} textColor={white} toggled={true}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <h4 className="text-decoration-none navbar-menu">Menu</h4>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <div title="Data load">
              <NavLink exact="true" to="/data-load">
                <CDBSidebarMenuItem
                  icon="fa-solid fa-upload"
                  className="navbar-item"
                >
                  Data Load
                </CDBSidebarMenuItem>
              </NavLink>
            </div>

            <div title="Clients">
              <NavLink exact="true" to="/clients">
                <CDBSidebarMenuItem
                  icon="fa-solid fa-users"
                  className="navbar-item"
                >
                  Clients
                </CDBSidebarMenuItem>
              </NavLink>
            </div>

            <div title="Products">
              <NavLink exact="true" to="/products">
                <CDBSidebarMenuItem
                  icon="fa-solid fa-tags"
                  className="navbar-item"
                >
                  Products
                </CDBSidebarMenuItem>
              </NavLink>
            </div>

            <div title="Purchases">
              <NavLink exact="true" to="/purchases">
                <CDBSidebarMenuItem
                  icon="fa-solid fa-cart-plus"
                  className="navbar-item"
                >
                  Purchases
                </CDBSidebarMenuItem>
              </NavLink>
            </div>

            <div title="Queries">
              <NavLink exact="true" to="/queries">
                <CDBSidebarMenuItem
                  icon="fa-solid fa-database"
                  className="navbar-item"
                >
                  Queries
                </CDBSidebarMenuItem>
              </NavLink>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default SideNavBar;

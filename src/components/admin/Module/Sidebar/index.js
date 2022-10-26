/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import LogoAdmin from "../../Base/logo";

const Sidebar = ({
  activeairlanes,
  activebooking,
  activedestinations,
  activefligts,
  activeusers,
}) => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-text mx-3">
          <LogoAdmin />
        </div>
      </a>

      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Nav Item - Charts */}
      <li className={`nav-item ${activeairlanes}`}>
        <Link to="/airlanes">
          <a className="nav-link" href="">
            <i className="fas fa-fw fa-table" />
            <span>Manage Airlanes</span>
          </a>
        </Link>
      </li>
      <li className={`nav-item ${activedestinations}`}>
        <Link to="/destinations">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-table" />
            <span>Manage Destinations</span>
          </a>
        </Link>
      </li>
      <li className={`nav-item ${activefligts}`}>
        <Link to="/flights">
          <a className="nav-link" href="">
            <i className="fas fa-fw fa-table" />
            <span>Manage Fligths</span>
          </a>
        </Link>
      </li>
      <li className={`nav-item ${activebooking}`}>
        <Link to="/booking">
          <a className="nav-link" href="">
            <i className="fas fa-fw fa-table" />
            <span>Manage Bookings</span>
          </a>
        </Link>
      </li>
      <li className={`nav-item ${activeusers}`}>
        <Link to="/users">
          <a className="nav-link" href="">
            <i className="fas fa-fw fa-table" />
            <span>Manage Users</span>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;

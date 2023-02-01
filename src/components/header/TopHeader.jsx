import React from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../../data/data";

export default function TopHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " id="topheader">
      <div
        className="container-fluid d-flex justify-content-between "
        style={{ background: "#00693e" }}
      >
        <Link className="navbar__brand" to="/">
          <img
            src="https://report-sctech.vercel.app/assets/images/logo.png"
            alt="logo"
            width="25"
            className="d-inline-block align-text-top me-2"
          />
          FOSTECH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav d-flex ">
            {sidebarData &&
              sidebarData.map((item, index) => {
                if (item.dropdownList) {
                  return (
                    <li key={index} className="nav-item dropdown active">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={item.path}
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.title}
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        {item.dropdownList.map((dropdownItem, index) => {
                          return (
                            <li key={index}>
                              <Link
                                className="dropdown-item"
                                to={dropdownItem.path}
                              >
                                {dropdownItem.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="nav-item">
                      <Link className="nav-link" to={item.path}>
                        {item.title}
                      </Link>
                    </li>
                  );
                }
              })}
            {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Tổng quan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Bán hàng
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Tồn kho
                </Link>
              </li> */}
          </ul>
          {/* Icon user */}
          <i className="fa-solid fa-gear" id="user__profile"></i>
        </div>
      </div>
    </nav>
  );
}

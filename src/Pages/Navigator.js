import React from "react";
import "./Navigator.css";
import { Link, NavLink } from "react-router-dom";
import { LocalDiningOutlined, Lock } from "@material-ui/icons";
import { auth } from "../firebase";

const Navigator = () => {
  return (
    <div className="navmain">
      <nav className="nav_header">
        <h1>
          <NavLink to="/">
            <b>GIBBER</b>
          </NavLink>
        </h1>
        <ul className="nav_ul">
          <li className="nav_li">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="nav_li">
            <Link to="/blog"> Blog</Link>
          </li>
          <li className="nav_li">
            <Link to="/news"> News</Link>
          </li>
          <li className="nav_li">
            <Lock onClick={() => auth.signOut()} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigator;

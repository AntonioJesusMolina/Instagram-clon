import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { makeStyles } from "@material-ui/core";
import "./MenuLateral.css";
import { BsInstagram } from "react-icons/bs";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeIcon from "@material-ui/icons/Home";
import Friends from "@material-ui/icons/People";
import Mensajes from "@material-ui/icons/Message";
import Soporte from "@material-ui/icons/ContactSupport";
import Book from "@material-ui/icons/Book";

export const MenuLateral = () => {
  const [sidebar, setSidebar] = useState(false);
  const classes = useStyles();

  const showSidebar = () => setSidebar(!sidebar);

  const SidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <HomeIcon />,
      cName: "nav-text",
    },
    {
      title: "Destacado",
      path: "/reports",
      icon: <Book />,
      cName: "nav-text",
    },
    {
      title: "Publicaciones",
      path: "/publicaciones",
      icon: <InstagramIcon />,
      cName: "nav-text",
    },
    {
      title: "Amigos",
      path: "/team",
      icon: <Friends />,
      cName: "nav-text",
    },
    {
      title: "Mensajes",
      path: "/messages",
      icon: <Mensajes />,
      cName: "nav-text",
    },
    {
      title: "Soporte",
      path: "/support",
      icon: <Soporte />,
      cName: "nav-text",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className={classes.menubars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#060b26",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menubars: {
    marginLeft: "2rem",
    fontSize: "2rem",
    background: "none",
  },
}));

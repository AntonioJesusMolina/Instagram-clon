import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { makeStyles } from "@material-ui/core";
import "./MenuLateral.css";
import { BsInstagram } from "react-icons/bs";

export const MenuLateral = () => {
  const [sidebar, setSidebar] = useState(false);
  const classes = useStyles();

  const showSidebar = () => setSidebar(!sidebar);

  const SidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiOutlineHome />,
      cName: "nav-text",
    },
    {
      title: "Destacado",
      path: "/reports",
      icon: <IoIcons.IoIosPaper />,
      cName: "nav-text",
    },
    {
      title: "Publicaciones",
      path: "/publicaciones",
      icon: <BsInstagram />,
      cName: "nav-text",
    },
    {
      title: "Amigos",
      path: "/team",
      icon: <IoIcons.IoMdPeople />,
      cName: "nav-text",
    },
    {
      title: "Mensajes",
      path: "/messages",
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: "nav-text",
    },
    {
      title: "Soporte",
      path: "/support",
      icon: <IoIcons.IoMdHelpCircle />,
      cName: "nav-text",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="nav-menu">
          <ul className="nav-menu-items" onClick={showSidebar}>
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

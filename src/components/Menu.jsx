import React from "react";
import { slide as Menu } from "react-burger-menu";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Celebrate", path: "/celebrate" },
  { label: "Gifts", path: "/gifts" },
  { label: "New", path: "/new" },
];

const NavigationItems = ({ path }) => {
  return (
    <ul className="nav__items">
      {menuItems.map((item) => (
        <li className="nav__item" key={item.label} path={item.path}>
          <a className="nav__link" href="#">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export const Navigation = () => {
  return (
    <nav className="nav">
      {/* <Menu width={"280px"}>
        <NavigationItems />
      </Menu> */}
      <NavigationItems />
    </nav>
  );
};

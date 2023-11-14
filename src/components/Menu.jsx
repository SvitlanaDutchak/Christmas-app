import React from "react";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Celebrate", path: "/celebrate" },
  { label: "Gifts", path: "/gifts" },
  { label: "New", path: "/new" },
];

const MenuItem = ({ children, path }) => {
  return (
    <li className="nav__item">
      <a className="nav__link" href="#">
        {children}
      </a>
    </li>
  );
};

export const Menu = () => {
  return (
    <nav className="nav">
      <ul className="nav__items">
        {menuItems.map((item) => (
          <MenuItem key={item.label} path={item.path}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

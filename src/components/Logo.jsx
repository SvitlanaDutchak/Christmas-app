import logo from "../images/logo.svg";

export const Logo = () => {
  return (
    <div className="header__logo">
      <img src={logo} alt="logo" className="header__icon" />
      <p className="text">Christmas</p>
    </div>
  );
};

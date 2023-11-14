import { Logo } from "./Logo";
import { Menu } from "./Menu";

const Header = () => {
  // const isShowMenu = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <header className="header">
        <Logo />
        <Menu />
    </header>
  );
};

export default Header;

import { Logo } from "./Logo";
import { Navigation } from "./Menu";
import { DarkModeButton } from "./DarkModeButton";

const Header = () => {
  // const isShowMenu = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <header className="header">
        <Logo />
        <Navigation />
        <DarkModeButton />
    </header>
  );
};

export default Header;

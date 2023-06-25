import { Close } from "@mui/icons-material";
import { NavBarStyles } from "../../assets/styles";
import { TransparentButton } from "../common";
import { NavBarItem, navBarList } from "./navbarList";

type NavBarProps = {
  istoggled: boolean;
  toggle: () => void;
};

export type MenuCloseButtonProp = {
  toggle: () => void;
};

export const MenuCloseButton = ({ toggle }: MenuCloseButtonProp) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <TransparentButton onClick={handleClick}>
      <Close />
    </TransparentButton>
  );
};

export const NavBar = ({ istoggled, toggle }: NavBarProps) => {
  return (
    <NavBarStyles role="navigation" istoggled={istoggled.toString()}>
      <ul className="menu">
        {navBarList.map((item: NavBarItem, index: number) => (
          <li key={index} className="nav__item">
            <a href={item.url} className="nav__link">
              <item.icon className="nav__icon" />
              {item.name}
            </a>
          </li>
        ))}
        <MenuCloseButton toggle={toggle} />
      </ul>
    </NavBarStyles>
  );
};

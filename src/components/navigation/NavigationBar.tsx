import { NavBarStyles } from "../../assets/styles";
import { NavBarItem, navBarList } from "./navbarList";

type NavBarProps = {
  istoggled: boolean;
};

export const NavBar = ({ istoggled }: NavBarProps) => {
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
      </ul>
    </NavBarStyles>
  );
};

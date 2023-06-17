import { NavBarItem, navBarList } from "./navbarList";

export const NavBar = () => {
  return (
    <ul className="nav">
      {navBarList.map((item: NavBarItem, index: number) => (
        <li key={index} className="nav__item">
          <a href={item.url} className="nav__link">
            <item.icon className="nav__icon" />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

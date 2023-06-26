import { NavBarItem, socialLinks } from "../components/navigation/navbarList";
import Profile from "../assets/images/jude.png";
import Wave from "../assets/images/shape-wawes.svg";
import CircleShape from "../assets/images/shape-circle.svg";

export const Home = () => {
  return (
    <>
      <h1>
        Hi I'm Jude
        <br /> Fullstack Developer <br /> Based in Ghana
      </h1>
      <img src={Profile} alt="profile" />
      <img src={Wave} alt="profile" />;
      <img src={CircleShape} alt="profile" />;
      <ul className="social-links">
        {socialLinks.map((item: NavBarItem) => (
          <li key={item.name} className="nav__item">
            <a href={item.url} className="nav__link">
              <item.icon className="nav__icon" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

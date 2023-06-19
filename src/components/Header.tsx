import { NavBar, Switch } from "."; // Update the correct import path
import { HeaderStyles } from "../assets/styles";
import { MenuOpen, Close } from "@material-ui/icons";
import { useToggle } from "../hooks";

export type MenuTogglerType = {
  istoggled: boolean;
  toggle?: () => void;
};

const MenuToggler = ({ toggle, istoggled }: MenuTogglerType) => {
  return (
    <button onClick={toggle} className="menu-toggler">
      {istoggled ? <Close /> : <MenuOpen />}
    </button>
  );
};

export const Header = (): JSX.Element => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <HeaderStyles role="header">
      <a href="#home" className="logo">
        <span>Jude</span>
      </a>
      <NavBar istoggled={isToggled} />
      <Switch />
      <MenuToggler istoggled={isToggled} toggle={toggle} />
    </HeaderStyles>
  );
};

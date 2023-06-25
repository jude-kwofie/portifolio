import { NavBar, Switch } from "."; // Update the correct import path
import { HeaderStyles } from "../assets/styles";
import { MenuOpen, Close } from "@material-ui/icons";
import { useToggle } from "../hooks";
import { TransparentButton } from "./common";

export type MenuTogglerType = {
  istoggled: boolean;
  toggle: () => void;
};

export const MenuToggler = ({ toggle, istoggled }: MenuTogglerType) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <TransparentButton onClick={handleClick}>
      {istoggled ? <Close /> : <MenuOpen />}
    </TransparentButton>
  );
};

export const Header = (): JSX.Element => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <HeaderStyles role="header">
      <a href="#home" className="logo">
        Jude
      </a>
      <NavBar istoggled={isToggled} toggle={toggle} />
      <Switch />
      <MenuToggler istoggled={isToggled} toggle={toggle} />
    </HeaderStyles>
  );
};

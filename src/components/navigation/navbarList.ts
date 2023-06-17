import {
  Home,
  CodeSharp,
  SchoolSharp,
  SvgIconComponent,
  BuildOutlined,
  Work,
  Email,
} from "@material-ui/icons";

export type NavBarItem = {
  name: string;
  icon: SvgIconComponent;
  url: string;
};
// Home - Skills - Qualification - Services - Projects - Contact;

export const navBarList: NavBarItem[] = [
  {
    name: "Home",
    icon: Home,
    url: "#home",
  },
  {
    name: "Skills",
    icon: CodeSharp,
    url: "#skills",
  },
  {
    name: "Qualification",
    icon: SchoolSharp,
    url: "#qualification",
  },
  {
    name: "Services",
    icon: BuildOutlined,
    url: "#services",
  },
  {
    name: "Projects",
    icon: Work,
    url: "#projects",
  },
  {
    name: "Contact",
    icon: Email,
    url: "#contact",
  },
];

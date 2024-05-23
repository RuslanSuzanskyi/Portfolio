import { ReactComponent as IconHome } from "../assets/icon-home.svg";
import { ReactComponent as IconAbout } from "../assets/icon-about.svg";
import { ReactComponent as IconProjects } from "../assets/icon-projects.svg";
import { ReactComponent as IconResume } from "../assets/icon-resume.svg";
import { ReactComponent as IconLink } from "../assets/icon-link.svg";

export const items = [
  {id: 1, text: "Home", to: "/", icon: <IconHome />},
  {id: 2, text: "About", to: "/about", icon: <IconAbout />},
  {id: 3, text: "Projects", to: "/projects", icon: <IconProjects />},
  {id: 4, text: "Resume", to: "/resume", icon: <IconResume />},
  {id: 5, to: "/fork", icon: <IconLink />},
]
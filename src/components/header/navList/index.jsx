import {ReactComponent as IconHome } from "../../../assets/icon-home.svg";
import {ReactComponent as IconAbout } from "../../../assets/icon-about.svg";
import {ReactComponent as IconProjects } from "../../../assets/icon-projects.svg";
import {ReactComponent as IconResume } from "../../../assets/icon-resume.svg";
import {ReactComponent as IconLink } from "../../../assets/icon-link.svg";
import NavItems from "../navItems";

const NavList = () => {
  return (  
    <>
     <NavItems text="Home" to="/" icon=<IconHome /> />
     <NavItems text="About" to="/about" icon=<IconAbout /> />
     <NavItems text="Projects" to="/projects" icon=<IconProjects /> />
     <NavItems text="Resume" to="/resume" icon=<IconResume /> />
     <NavItems to="/fork" icon=<IconLink /> />
    </>
  );
}
 
export default NavList;
import { ReactComponent as IconHome } from "../assets/icon-home.svg";
import { ReactComponent as IconAbout } from "../assets/icon-about.svg";
import { ReactComponent as IconProjects } from "../assets/icon-projects.svg";
import { ReactComponent as IconResume } from "../assets/icon-resume.svg";
import { ReactComponent as IconLink } from "../assets/icon-link.svg";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export const items = [
  {id: 1, text: "Home", url: "/", icon: <IconHome />},
  {id: 2, text: "About", url: "/about", icon: <IconAbout />},
  {id: 3, text: "Projects", url: "/projects", icon: <IconProjects />},
  {id: 4, text: "Resume", url: "/resume", icon: <IconResume />},
  {id: 5, icon: <IconLink />},
]

export const socials = [
  {id: 1, url: "https://github.com/RuslanSuzanskyi", icon: <AiOutlineGithub />},
  {id: 2, url: "www.linkedin.com/in/ruslan-suzanskyi-671a692b3", icon: <FaLinkedin />},
  // {id: 3, link: "https://github.com/RuslanSuzanskyi", icon: <IconGitHub />},
  // {id: 4, link: "https://github.com/RuslanSuzanskyi", icon: <IconGitHub />},
]
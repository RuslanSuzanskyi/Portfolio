import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import Wrapper from "../wrapper/Wrapper";
import NavList from "./navList";
import { items } from "../constants";
import { useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navMenu = 'z-50 fixed left-0 top-0 w-full h-16 p-2 flex items-center font-medium transition-all duration-300 ease-out';

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (  
    <header className={`${navMenu} ${isScrolled ? 'shadow-[#1b1a2ea9] bg-[#1b1a2ea9] backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <Wrapper>
        <nav className="flex items-center justify-between">
          <div className="w-12 h-12">
            <Link to='/'>
              <LogoIcon />
            </Link>
          </div>
          <div className="flex items-center gap-6 flex-row">
            <NavList items={items}/>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
}
 
export default Header;
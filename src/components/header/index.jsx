import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import Wrapper from "../wrapper/Wrapper";
import NavList from "./navList";
import { items } from "../constants";

const Header = () => {
  return (  
    <header className="z-50 fixed left-0 top-0 bg-[#1b1a2ea9] w-full h-16 p-2 flex items-center font-medium backdrop-blur-lg shadow-md shadow-[#1b1a2ea9]">
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